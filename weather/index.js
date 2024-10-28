// 67528e588f99f0469d1727ea31395f5a

// https://api.openweathermap.org/data/2.5/weather?q=Katwa&appid=67528e588f99f0469d1727ea31395f5a&units=metric

// {
//     "coord": {
//        "lon": 7.367,
//        "lat": 45.133
//     },
//     "weather": [
//        {
//           "id": 501,
//           "main": "Rain",
//           "description": "moderate rain",
//           "icon": "10d"
//        }
//     ],
//     "base": "stations",
//     "main": {
//        "temp": 284.2,
//        "feels_like": 282.93,
//        "temp_min": 283.06,
//        "temp_max": 286.82,
//        "pressure": 1021,
//        "humidity": 60,
//        "sea_level": 1021,
//        "grnd_level": 910
//     },
//     "visibility": 10000,
//     "wind": {
//        "speed": 4.09,
//        "deg": 121,
//        "gust": 3.47
//     },
//     "rain": {
//        "1h": 2.73
//     },
//     "clouds": {
//        "all": 83
//     },
//     "dt": 1726660758,
//     "sys": {
//        "type": 1,
//        "id": 6736,
//        "country": "IT",
//        "sunrise": 1726636384,
//        "sunset": 1726680975
//     },
//     "timezone": 7200,
//     "id": 3165523,
//     "name": "Province of Turin",
//     "cod": 200
//  }                    
       
 
 const ApiKey='67528e588f99f0469d1727ea31395f5a';
 const ApiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
 const searchinput = document.querySelector(".search input");
 const searchbutton = document.querySelector(".search button");
 const weathericon = document.querySelector(".weather-icon")


 async function checkweather(city) {
    const respondse = await fetch(ApiUrl + city +`&appid=${ApiKey}`)
    var data = await respondse.json();
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".weather-behave").innerHTML=data.weather[0].main;

    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".feels_like").innerHTML="feels " + data.main.feels_like + "°C";

    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    document.querySelector(".minmax").innerHTML=data.main.temp_min + "°C"+ " - " + data.main.temp_max + "°C";

    
if(data.weather[0].main == "Clouds"){ document.querySelector(".weather-icon").src = "images/clouds.png";
}
else if(data.weather[0].main == "Clear"){ document.querySelector(".weather-icon").src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){ document.querySelector(".weather-icon").src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){ document.querySelector(".weather-icon").src = "images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){ document.querySelector(".weather-icon").src = "images/mist.png";
}

document.querySelector(".weather").style.display = "block";
 }


 searchbutton.addEventListener("click", () => {
    checkweather(searchinput.value)

 })

 document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if Enter key is pressed
      document.querySelector(".search button").click(); // Trigger button click
    }
  });