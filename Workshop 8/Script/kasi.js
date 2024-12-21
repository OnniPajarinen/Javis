var text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';



function toka(){
    document.getElementById("jsondata").innerHTML = text
}

function eka() {
var joo = JSON.parse(text);
    
    var result = "";

    joo.employees.forEach(function(employee) {
        result += employee.firstName +" "+ employee.lastName + "<br>";
    });

    document.getElementById("jsondata").innerHTML = result;
}

function first() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", true);    
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("rawdata").innerHTML = xmlhttp.responseText
        }
    };
}

function second() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", true);    
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var nyt = JSON.parse(xmlhttp.responseText);

            var output = ""
            if (nyt.Search) {
                nyt.Search.forEach(function (movie) {
                    output += `<li><strong>${movie.Title}</strong> (${movie.Year}) <br> <img src="${movie.Poster}"</li>`;
                });
            }
            output += "</ul>";

            document.getElementById("rawdata").innerHTML = output;
        }
        
    };
}

function datajuttu(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Vantaa&units=metric&mode=JSON&APPID=2c35374685ddd0dfb3ec7f1e4313f32e", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        var ookoo = JSON.parse(xmlhttp.responseText);

        var weatherDescription = ookoo.weather[0].description;
        var temperature = ookoo.main.temp;
        var feelsLike = ookoo.main.feels_like;
        var cityName = ookoo.name;
        
        document.getElementById("weatherdata").innerHTML = `${weatherDescription} <br> ${temperature} <br> ${feelsLike} <br> ${cityName}`
        }
    }
}

function uusi(){
    var city = document.getElementById("city").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=JSON&APPID=2c35374685ddd0dfb3ec7f1e4313f32e`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        var ookoo = JSON.parse(xmlhttp.responseText);

        var weatherDescription = ookoo.weather[0].description;
        var temperature = ookoo.main.temp;
        var feelsLike = ookoo.main.feels_like;
        var cityName = ookoo.name;
        
        document.getElementById("weatherdata").innerHTML = `Weather in ${cityName} <br> Temperature: ${temperature}°C <br> Feels like: ${feelsLike}°C <br> Condition: ${weatherDescription}`
        }
    }
        
}

function neew(){
    var city = document.getElementById("citysearch").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=JSON&APPID=2c35374685ddd0dfb3ec7f1e4313f32e`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        var ookoo = JSON.parse(xmlhttp.responseText);

        var weatherDescription = ookoo.weather[0].description;
        var temperature = ookoo.main.temp;
        var feelsLike = ookoo.main.feels_like;
        var cityName = ookoo.name;
        
        document.getElementById("weatherdata").innerHTML = `Weather in ${cityName} <br> Temperature: ${temperature}°C <br> Feels like: ${feelsLike}°C <br> Condition: ${weatherDescription}`
        }
    }
        
}