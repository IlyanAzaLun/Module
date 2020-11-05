$(function() {
//overriding jquery-ui.autocomplete .js functions
$.ui.autocomplete.prototype._renderMenu = function(ul, items) {
  var self = this;
  //table definitions
  ul.append("<table><thead><tr><th>ID#</th><th>Name</th><th>Cool&nbsp;Points</th></tr></thead><tbody></tbody></table>");
  $.each( items, function( index, item ) {
    self._renderItemData(ul, ul.find("table tbody"), item );
  });
};
$.ui.autocomplete.prototype._renderItemData = function(ul,table, item) {
  return this._renderItem( table, item ).data( "ui-autocomplete-item", item );
};
$.ui.autocomplete.prototype._renderItem = function(table, item) {
  return $( "<tr class='ui-menu-item' role='presentation'></tr>" )
    //.data( "item.autocomplete", item )
    .append( "<td >"+item.item_id+"</td>"+"<td>"+item.item_name+"</td>"+"<td>"+item.item_category_id+"</td>" ) // change this
    .appendTo( table );
};

$( "#project" ).autocomplete({
	minLength: 1,
	source: function(request, response) {
            $.ajax({
                url: "fetch.php",
                method: "POST",
                dataType: "json",
                data: {
                  term: request.term,
                },
                success: function(data) {
                    response(data);
                }
            });
        },
    
	focus: function( event, ui ) {
		console.log(ui.item.item_name);
    $( "#project" ).val( ui.item.item_name );                                                                   // change this
		$( "#project-id" ).val( ui.item.item_id );                                                                  // change this
		$( "#project-description" ).html( ui.item.item_category_id );                                               // change this
		return false;
	}//you can write for select too
    /*select:*/
})
});