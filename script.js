
	const url1='https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/America/Los_Angeles'
	const url='https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone'

fetch(url1,{
		headers:{
			'Authorization':'Bearer${API_KEY}'
		}
	})
	.then (response => {
		if(!response.ok){
			throw new Error('Eror');
		}
		return response.json();
	})
	.then(data =>{
		console.log(data);
		var city=data.timezone
		var time= data.datetime
		console.log(city)
		console.log(time)
	})
	.catch(error=> {
		console.error('Error was found',error);
	
	});



