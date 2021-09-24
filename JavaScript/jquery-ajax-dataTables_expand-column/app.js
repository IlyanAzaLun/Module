function format ( d ) {
	console.log(d);
	var tr = '';

	d.id.forEach(function (item){
		tr += `
		<tr>
		<td>${item.answer}</td>
		<td>${item.created_at}</td>
		</tr>`;
	});
	return `
	<table width="100%">
	<thead>
	<th>Answers</th>
	<th>Created at</th>
	</thead>
	${tr}
	</table>`;
}$(document).ready(function() {
	let requestAJAX = new AJAX('./fetch.php', '', 'GET', 'json');
	AJAX.prototype.staticFunction = (data) => {
		var table = $('#example').DataTable( {
			data: data,
			order: [[1, 'asc']],
			columns: [
			{
				className:'details-control',
				orderable:false,
				data:null,
				defaultContent: ''
			},
			{ data: 'question'},
			{ data: 'created_at'},
			{ data: 'updated_at'},
			],
		} );
	    // Add event listener for opening and closing details
	    $('#example tbody').on('click', 'td.details-control', function () {
	    	var tr = $(this).closest('tr');
	    	var row = table.row( tr );

	    	if ( row.child.isShown() ) {
	            // This row is already open - close it
	            row.child.hide();
	            tr.removeClass('shown');
	        }
	        else {
	            // Open this row
	            d = row.data();
	            row.child( format(d) ).show();
	            tr.addClass('shown');
	        }
	    });
	};requestAJAX.requestAJAX();
});