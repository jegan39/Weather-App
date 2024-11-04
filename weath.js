var weatherlist = document.querySelector(".weather")
function openweather(){
    weatherlist.style.display="block"
}
const apikey = "85836f35fc2e80dcac7ff702dd01a6db";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".w-icon");

async function checkw(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    
    if (data.weather[0].main === "Clouds") {
        weathericon.src = "clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weathericon.src = "clear.png";
    } else if (data.weather[0].main === "Rain") {
        weathericon.src = "rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weathericon.src = "drizzle.png";  
    } else if (data.weather[0].main === "Mist") {
        weathericon.src = "mist.png";
    } 
    
}


searchbtn.addEventListener("click", () => {
    checkw(searchbox.value);
});
