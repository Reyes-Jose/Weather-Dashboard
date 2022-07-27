var APIKey = "603bc241402fed78664b0cacb0614aeb";
var city = $("#userInput");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var userSelect = $(".btn");



userSelect.on("click",function getWeather(){
    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data));

})



