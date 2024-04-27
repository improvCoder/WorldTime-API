

function myfunction(){

	let time="";
	let date="";
	var city=document.getElementById('user_Input').value;
	const url='https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/'+city


fetch(url,{
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
		
		console.log(data)

	document.getElementById("city").innerHTML=data.timezone;
		let s=data.datetime;
		
		for(i=0;i<10;i++)
			{date=date+s[i]}
			document.getElementById("date").innerHTML=date;
	
		for(i=11;i<19;i++)
			{time=time+s[i]}
		document.getElementById("time").innerHTML=time;
	})
	.catch(error=> {
		console.error('Error was found',error);
	
	});

}


function list_of_Cities(){

	const url1='https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone'
	const array=[];

	fetch(url1)
	.then(response => response.json())
	.then(data1 => {

					for(i=0;i<350;i++)
					{
					array.push(data1[i]);
					
					}
					console.log(array)
					const add= document.createDocumentFragment();
					for(let x in array){
						const li= document.createElement('li');
						li.textContent= array[x];
						add.appendChild(li);
					}
					document.getElementById('cities').appendChild(add);
	})

	.catch(error => console.error(error))	

}