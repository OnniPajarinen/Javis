var text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';



function toka(){
    document.getElementById("omg").innerHTML = text
}

function eka() {
var joo = JSON.parse(text);
    
    var result = "";

    joo.employees.forEach(function(employee) {
        result += employee.firstName +" "+ employee.lastName + "<br>";
    });

    document.getElementById("omg").innerHTML = result;
}