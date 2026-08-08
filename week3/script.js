const apiKey = "9ef3844026ee533d9a2cf0463b4a5500";


function getWeather(){

    let city = document.getElementById("city").value;


    if(city === "")
    {
        document.getElementById("error").innerHTML =
        "Please enter a city name";

        return;
    }



    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



    fetch(url)

    .then(response => {

        if(!response.ok)
        {
            throw new Error("City not found");
        }

        return response.json();

    })


    .then(data => {


        document.getElementById("error").innerHTML = "";


        document.getElementById("cityName").innerHTML =
        data.name;



        document.getElementById("temperature").innerHTML =
        "Temperature: " + data.main.temp + " °C";



        document.getElementById("humidity").innerHTML =
        "Humidity: " + data.main.humidity + "%";



        document.getElementById("condition").innerHTML =
        "Condition: " + data.weather[0].description;


    })


    .catch(error => {


        document.getElementById("error").innerHTML =
        error.message;


    });

}