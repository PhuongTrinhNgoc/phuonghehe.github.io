var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var value = document.querySelector('.value')



async function changeWeather(){
  let searchBox =  search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox}&appid=3ac76f546302cb174500aef033063abb`
 let data = await fetch(apiUrl)
    .then(res=>res.json())
    if(data.cod == 200){
    console.log(data)
    city.innerText = data.name
    humidity.innerText = data.main.humidity
    value.innerText = (data.main.temp - 273.15) + `'c`
    }
    else{

    }

}
search.addEventListener('keyboard', function(event){
    if(event.Code === 'Enter'){
changeWeather()

}})