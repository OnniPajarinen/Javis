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
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var nyt = JSON.parse(xmlhttp.responseText)
            document.getElementById("rawdata").innerHTML = nyt
        }
    };
}