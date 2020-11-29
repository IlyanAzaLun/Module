function format ( d ) {
			// `d` is the original data object for the row
		  console.log(d);
		  var tr = '';
		  
		  d.id.forEach(function (item) {
		  tr += 
		  		'<tr>'+
		            '<td>'+item.answer+'</td>'+
		            '<td>'+item.created_at+'</td>'+
		        '</tr>';

		  });
		  
		    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
		    '<thead>'+
	  			'<th>code Doc</th>'+
	  			'<th>title</th>'+
	  		'</thead>'+
		      tr +
		      '</table>';
		}
		$(document).ready(function() {
			// ext();
			var table = $('#example').DataTable( {
		      data: './request.php',
		      order: [[1, 'asc']],
		      columns: [
		            {
		                className:      'details-control',
		                orderable:      false,
		                data:           null,
		                defaultContent: ''
		            },
		            { data: 0},
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
		    } );

		} );