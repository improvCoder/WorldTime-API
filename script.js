

function myfunction(){


var city=document.getElementById('user_Input').value;
	const url1='https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/America/'+city
	//const url='https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone'


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
		document.getElementById("city").innerHTML=data.timezone;
		document.getElementById("time").innerHTML=data.datetime;
	})
	.catch(error=> {
		console.error('Error was found',error);
	
	});

}