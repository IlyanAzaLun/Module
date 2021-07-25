$(document).ready(function(){

	$('#submit').click(function(){
		let requestAJAX = new AJAX('./fetch.php', '', 'POST', 'json');
        requestAJAX.data = {action: 'input', lang: $('input[name="PL"]:checked').val()};
        AJAX.prototype.staticFunction = (data) => {
          console.log(data);
          alert($('input[name="PL"]:checked').val());
          makechart()
        };requestAJAX.requestAJAX();
	})
	makechart()
	function makechart(){
		let requestAJAX = new AJAX('./fetch.php', '', 'POST', 'json');		
		requestAJAX.data = {action: 'fetch'};
        AJAX.prototype.staticFunction = (data) => {
        	console.log(data);
        	let lang = [];
        	let total = [];
        	let color = [];
        	for(let i=0; i<data.length;i++){
        		lang.push(data[i].language)
        		total.push(data[i].total)
        		color.push(data[i].color)
        	}
        	let chart_data = {
        		labels:lang,
        		datasets:[
        			{
        				label:'Vote',
        				backgroundColor:color,
        				color:'#fff',
        				data:total
        			}
        		]
        	};
        	let options = {
        		responsive:true,
        		scales:{
        			yAxes:[{
        				ticks:{
        					min:0
        				}
        			}]
        		}
        	};
        	let group_chart1 = $('#pie-chart');
        	let graph1 = new Chart(group_chart1, 
        		{type:"pie", data:chart_data});

        	let group_chart2 = $('#doughnut-chart');
        	let graph2 = new Chart(group_chart2, 
        		{type:"doughnut", data:chart_data});
        
        	let group_chart3 = $('#bar-chart');
        	let graph3 = new Chart(group_chart3, 
        		{type:"bar", data:chart_data,options:options});
        };requestAJAX.requestAJAX();	
	}
})