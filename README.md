# weather-information

Description:

This project fetches current weather data for a given city using the OpenWeatherMap API.

Features:

- Displays temperature , description , wind speed and humidity.
- Shows a corresponding weather image that relates to the current weather condition.
- Uses a search bar to gain a city name.

How to install:

- Click on the Code<> button on repository and download as a zip file.
- Save this file onto your laptop or device.
- To view code open in a text editor.
- Open index.html on a web browser.(Use GoLive extension on Visual Studio Code)

How to use:

1. An API Key is required simply sign up for one on the OpenWeatherMap website:

   https://openweathermap.org/api

2. Download repository as described above and open in text editor.

3. Create a config.js file and add you API key as a constant.

   const APIKey = "INSERT KEY HERE";

   The directory structure should now look like this:

   images
   │ ├── clear.png
   │ ├── cloud.png
   │ ├── mist.png
   │ ├── rain.png
   │ ├── snow.png
   │ ├── wind.png

   ├── index.html

   ├── script.js

   ├── style.css

   └── config.js

4. Export this value in the same file.

   const APIKey = "INSERT KEY HERE";

   export default APIKey;

5. Now you will be able to open/run index.html in your web browser.

6. Enter a city name and click the search button.

7. The current weather will now be displayed.
