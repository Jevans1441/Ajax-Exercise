fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Athens,US-GA&appid=710540d456e691680abdfc45926ba1b8&units=imperial"
)
  .then((Response) => Response.json())
  .then((body) => {
    document.getElementById("weather").innerHTML = body.main.temp + "°";
  })
  .catch((error) => alert("Please add your api key to the fetch url"));
