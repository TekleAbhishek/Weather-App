const apiKey="a3b42eb73d96a585626c1a30e9b5884d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search-area input");
const searchBtn=document.querySelector(".search-area button");
const weatherIcon=document.querySelector(".weather-icon");
const desc=document.querySelector(".weather .desc")

async function checkWhether(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src=" /Weather_App/assets/images/clouds.png";
        desc.innerHTML="Cloudy";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src=" /Weather_App/assets/images/clear.png";
        desc.innerHTML="Clear";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src=" /Weather_App/assets/images/rain.png";
        desc.innerHTML="Rainy";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src=" /Weather_App/assets/images/drizzle.png";
        desc.innerHTML="Drizzling";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src=" /Weather_App/assets/images/mist.png";
        desc.innerHTML="Mist";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src=" /Weather_App/assets/images/snow.png";
        desc.innerHTML="Snow";
    }
    
}
searchBtn.addEventListener("click",()=>{
    checkWhether(searchBox.value);
})