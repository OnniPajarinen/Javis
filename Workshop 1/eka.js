document.write("Hello World!");
alert("Hello World!");
console.log("Hello World")

window.alert(prompt("Anna nimesi..."))

var x = 5;
var y = 6;
var z = x + y;
console.log(z);
alert(z);
document.write(z);

var x = 18;
var order = "Beer";
if (x > 50) { document.write("He's over 50!"); }
else if (x <= 50 && x> 30) { document.write("Middle aged man, who ordered some " + order); }
else if (x <= 30 && x >= 18) { document.write("Young adult, who ordered some " + order); }
else { document.write("It seems you're bit underaged.") }

var x = 30;
var order = "Beer";
if (x > 50) { document.write("He's over 50! Here's " + order)
console.log("He's over 50! Here's " + order); }
else if (x <= 50 && x > 40) { document.write("Middle aged man, who ordered some " + order)
console.log("Middle aged man, who ordered some " + order); }
else if (x <= 40 && x > 30) { document.write("Adult, who ordered some " + order)
console.log("Adult, who ordered some  " + order); }
else if (x <= 30 && x >= 18) { document.write("Young adult, who ordered some " + order)
console.log("Young adult, who ordered some " + order); }
else { document.write("It seems you're bit underaged.")
console.log("It seems you're bit underaged.") }

var arr = [];
for (var i = 0; i < 15; i++)
{ arr.push(Math.floor(Math.random() * 100)); } 
console.log(arr);
document.write(arr);

var arr = [];
for (var i = 0; i < 15; i++)
{ arr.push(Math.random() * 100); } 
console.log(arr);
document.write(arr);

function addNumbers(a, b) {
return a + b;}
var a = prompt("First number: ");
var b = prompt("Second number: ");
a = Number(a);
b = Number(b);
if (a+b > 100) { alert("Too big!");
document.write("<h2>Sum Calculation</h2>");
document.write("<p>" + a + " + " + b + " = <strong>" + (a+b) + "</strong></p>"); }
console.log(addNumbers(a, b));

var person = {
firstName:"John",
lastName:"Doe",
age:50,
eyeColor:"blue",
address:"Ratatie 3",
telephoneNumber:"0100100", };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.eyeColor);
console.log(person.address);
console.log(person.telephoneNumber);

var person = [
    {firstName:"John",
lastName:"Doe",
age:50,
eyeColor:"blue",
address:"Ratatie 3",
telephoneNumber:"0100100"
},
{firstName:"Joe",
lastName:"Loe",
age:25,
eyeColor:"green",
address:"Ratikkakuja 5",
telephoneNumber:"0200209"},
{firstName:"Riley",
lastName:"Resting",
age:80,
eyeColor:"grey",
address:"Pasilanraitti 3",
telephoneNumber:"45609223"},
{ firstName:"Oili",
lastName:"Matikainen",
age:15,
eyeColor:"blue",
address:"Omenatie 94",
telephoneNumber:"042394238"}]
;
for (var i = 0; i < person.length; i++) {
console.log(person[i].firstName);
console.log(person[i].lastName);
console.log(person[i].age);
console.log(person[i].eyeColor);
console.log(person[i].address);
console.log(person[i].telephoneNumber); }

