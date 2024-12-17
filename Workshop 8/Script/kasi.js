var text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';



function toka(){
    document.getElementById("omg").innerHTML = text
}

function eka(){
    var joo = JSON.parse(text);
console.log(joo.employees);

joo.employees.forEach(function(employee) {
    console.log("First Name: " + employee.firstName + ", Last Name: " + employee.lastName);
});
}