weather = document.querySelector("#weather");
city = document.querySelector("#city");
feelsLike = document.querySelector("#feelsLike");
lows = document.querySelector("#lows");
highs = document.querySelector("#highs");

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Athens,US-GA&appid=710540d456e691680abdfc45926ba1b8&units=imperial"
)
  .then((Response) => Response.json())
  .then((body) => {
    city.innerHTML = body.name;
    weather.innerHTML = body.main.temp + "°";
    feelsLike.innerHTML = body.main.feels_like;
    lows.innerHTML = body.main.temp_min;
    highs.innerHTML = body.main.temp_max;
    console.log(body);
  });
//   .catch((error) => alert("Please add your api key to the fetch url"));
