import APIKey from "./config.js";


document.getElementById('searchButton').addEventListener('click' , function() {
    const cityValue = document.getElementById('search').value.toLowerCase();


    if(cityValue == '') {
        alert('Enter a city name.');
        return
    }

    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${APIKey}`)
    .then(response => response.json()).
    then(json => {

        if(json.cod == '404') {
            alert('Error.Location not found!');
            return
        }
        document.getElementById("weatherBox").style.display = "block";
        const img = document.getElementById('weatherImage');
        switch (json.weather[0].main) {
            case "Clouds":
                weatherImage.src = "images/cloud.png";
                break;

            case "Clear":
                weatherImage.src = "images/clear.png";
                break;

            case "Mist":
                weatherImage.src = "images/mist.png";
                break;

            case "Haze":
                weatherImage.src = "images/mist.png";
                break;

            case "Snow":
                weatherImage.src = "images/snow.png";
                break;

            case "Rain":
                weatherImage.src = "images/rain.png";
                break;

        
            default:
                weatherImage.src = "images/cloud.png";
                break;
        }

        const temp = document.getElementById('temp');
        const temperature = Math.round(json.main.temp);
        temp.innerHTML = `${temperature}<span>°C</span>`;

        const description =  document.getElementById('description');
        description.innerHTML = `${json.weather[0].description}`;

        const windSpeed = document.getElementById('windSpeed');
        const wind = Math.round(json.wind.speed)
        windSpeed.innerHTML= `${wind}<span> Km/h</span>`;

        const humidityValue = document.getElementById('humidityValue');
        const humidity = Math.round(json.main.humidity);
        humidityValue.innerHTML = `${humidity}<span> %</span>`;


    })

})
