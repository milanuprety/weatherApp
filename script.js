
 

 function getWeather(cityName){
 
 let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
 
 const URL = "https://api.openweathermap.org/data/2.5/weather";
 
 fetch(`${URL}?q=${cityName}&appid=${API_KEY}&units=imperial`)
 .then(response => response.json())
 .then(data => {
     console.log(data)
     const weatherData = {cityName:null,weatherName:null,temp:null,minTemp:null,maxTemp:null}
   weatherData.cityName=data.name;
   weatherData.weatherName=data.weather[0].main;
   weatherData.temp=data.main.temp;
   weatherData.minTemp=data.main.temp_min;
   weatherData.maxTemp=data.main.temp_max;
 
   showWeather(weatherData);  
 
 }).catch(err => console.log(err));
 }
 
 function searchCity(){
     const cityName = document.getElementById('city-input').value;
     getWeather(cityName);
 
 }
 
 function showWeather(weatherData){
     document.getElementById('cityName').innerText=`Selected city is ${weatherData.cityName}`
     document.getElementById('weatherName').innerText=`The weather of ${weatherData.cityName} is ${weatherData.weatherName}`;
     document.getElementById('temp').innerText=`Current Temperature is ${weatherData.temp}`
     document.getElementById('minTemp').innerText=`Minimum Temperature is ${weatherData.minTemp}`
     document.getElementById('maxTemp').innerText=`Maximum Temperature is ${weatherData.maxTemp}`
     if(weatherData.weatherName=='Clouds'){
         document.getElementById('weatherImage').setAttribute('src','/weathergifs/clouds-sky.gif')
     }
  
 console.log(weatherData)
     
 
 }
    