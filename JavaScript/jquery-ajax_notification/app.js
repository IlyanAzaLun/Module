$(document).ready(function(){
// 
$.ajax({
	url: 'fetch.php',
	method: "POST",
	dataType: 'json',
	data: {type: 'load'},

	success:function(result){
		$.map(result, function(val, key){
			console.log(val)
			$('#website_stuff').append(`
<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">By ${val.user_id}
			<button type="button" name="total_like" id="total_like" class="btn btn-warning btn-xs"> Like</button>
		</h3>
	</div>
	<div class="panel-body">
		${val.question}
	</div>
	<div class="panel-footer" align="right">
		${val.id}
	</div>
</div>
			`)
		})
	}
})

});