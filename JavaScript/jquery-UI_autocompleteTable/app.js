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
    .append( "<td >"+item.username+"</td>"+"<td>"+item.name+"</td>"+"<td>"+item.email+"</td>" ) // change this
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
    
	select: function( event, ui ) {
    $( "#project" ).val( ui.item.name );                                                                   // change this
		$( "#project-id" ).val( ui.item.username );                                                                  // change this
		$( "#project-description" ).html( ui.item.email );                                               // change this
		return false;
	}//you can write for select too
    /*select:*/
})
});