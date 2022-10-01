const api_url = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,VN,uk&APPID=ae2bfc472e9eae631c8ae4f39c12d98d";
async function getUser() {

	 //making a call to API
 	const response = await fetch(api_url);

 	// converting it to JSON format
 	const data = await response.json();

 	// getting data/information from JSON
 

console.log(data.list.weather)
 	
}
// Calling the getUser() function
getUser();