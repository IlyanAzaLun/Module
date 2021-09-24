$(function() {
  $.ui.autocomplete.prototype._renderMenu = function(ul, items) {
    var self = this;
    ul.append("<table><thead><tr><th>ID#</th><th>Name</th><th>Cool&nbsp;Points</th></tr></thead><tbody></tbody></table>");
    $.each( items, function( index, item ) {
      self._renderItemData(ul, ul.find("table tbody"), item );
    });
  };$.ui.autocomplete.prototype._renderItemData = function(ul,table, item) {
    return this._renderItem( table, item ).data( "ui-autocomplete-item", item );
  };$.ui.autocomplete.prototype._renderItem = function(table, item) {
  return $( "<tr class='ui-menu-item' role='presentation'></tr>" )
    .append( "<td >"+item.id+"</td>"+"<td>"+item.name+"</td>"+"<td>"+item.value+"</td>" ) // change this
    .appendTo( table );
  };$( "#project" ).autocomplete({
      minLength: 1,
      source: function(request, response) {
        let requestAJAX = new AJAX('./fetch.php', '', 'POST', 'json');
        requestAJAX.data = {term: request.term};
        AJAX.prototype.staticFunction = (data) => {
          response(data);
        };requestAJAX.requestAJAX();
      },
      select: function( event, ui ) {
        $( "#project" ).val( ui.item.name );                                                                   // change this
    		$( "#project-id" ).val( ui.item.id );                                                                  // change this
    		$( "#project-description" ).html( ui.item.value );                                               // change this
    		return false;
    	}
    });
});