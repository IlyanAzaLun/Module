class AJAX {
	constructor(url, data, request, dataType){
		this.url = url;
		this._data = data;
		this.request = request;
		this.dataType = dataType;
	}
	requestAJAX(){
		$.ajax({
			url: this.url,
			data: this._data,
			type: this.request,
			dataType: this.dataType,
			success: (response)=>{
				this.staticFunction(response);
			}
		});	
	}
	set data(value){
		this._data = value;
	}
	staticFunction(...data){
		console.log(data);
	}
}

// const request = new AJAX('http://localheart/Module/JavaScript/script/fetch.php', '', 'GET', 'json')
// AJAX.prototype.staticFunction = (...data)=>{
// 	for(value of data){
// 		console.log(value);
// 	}
// }