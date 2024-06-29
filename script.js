let container= document.querySelector(".container")
let input= document.querySelector(".search-box input")
let temperature= document.querySelector(".temperature")
let humidity= document.querySelector(".humidity-percent")
let windSpeed= document.querySelector(".windSpeed-rate")
let description= document.querySelector(".description")
let weather = document.querySelector(".weather")
let weatherDetails = document.querySelector(".weather-details")

let searchBtn = document.querySelector(".search-box button")
let weatherIcon= document.querySelector(".weather-icon")

searchBtn.addEventListener("click",async ()=>{
  inputCity = input.value.trim()

  let apikey = "";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apikey}&units=metric`;
  
  let response= await fetch(url);
  let data = await response.json();
  console.log(response);

  weather.style.visibility = "visible ";
  
  if(response.status === 404){
    container.style.height = "350px";
    weatherDetails.classList.remove("active");
    description.innerText = "Oops City not available";
    description.style.fontSize = "20px";
    temperature.innerText = "";
    weatherIcon.src = "Images/404.png";
  }
    
  else{
    container.style.height = "500px";
    weatherDetails.classList.add("active");
    weatherDetails.style.transform = "translate(0%)";
    console.log(data.weather[0]);
    description.innerText = data.name + " -> " + data.weather[0].description;
    description.style.fontSize = "15px";
    temperature.innerText = data.main.temp + "°c";
    humidity.innerText = data.main.humidity + "%";
    windSpeed.innerText = data.wind.speed + "km/h";
    
    let currentWeather = data.weather[0].main;
    if(currentWeather === "Clouds"){
      weatherIcon.src = "Images/clouds.png";
    }
    else if(currentWeather === "Clear"){
      weatherIcon.src = "Images/clear.png";
    }
    else if(currentWeather === "Rain"){
      weatherIcon.src = "Images/rain.png";
    }
    else if(currentWeather === "Drizzle"){
      weatherIcon.src = "Images/drizzle.png";
    }
    else if(weather === "Mist"){
      weatherIcon.src = "Images/mist.png";
    }
    else if(weather === "Snow"){
      weatherIcon.src = "Images/snow.png";
    }
  }
})


//https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid={mykey}&units=metric
