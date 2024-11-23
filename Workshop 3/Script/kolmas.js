function myFunction() {
    alert("You clicked me! "+ Date());
}

function showTable() {
    document.write("<table border='1' cellpadding='10'>");
            document.write("<tr>");
            document.write("<th>Name</th>");
            document.write("<th>Position</th>");
            document.write("<th>Salary</th>");
            document.write("</tr>");

            document.write("<tr>");
            document.write("<td>Tiger Nixon</td>");
            document.write("<td>System Architect</td>");
            document.write("<td>$320,800</td>");
            document.write("</tr>");

            document.write("<tr>");
            document.write("<td>Garrett Winters</td>");
            document.write("<td>Accountant</td>");
            document.write("<td>$170,750</td>");
            document.write("</tr>");

            document.write("<tr>");
            document.write("<td>Ashton Cox</td>");
            document.write("<td>Junior Technical Author</td>");
            document.write("<td>$86,000</td>");
            document.write("</tr>");

            document.write("<tr>");
            document.write("<td>Cedric Kelly</td>");
            document.write("<td>Senior Javascript Developer</td>");
            document.write("<td>$433,060</td>");
            document.write("</tr>");

            document.write("<tr>");
            document.write("<td>Airi Satou</td>");
            document.write("<td>Accountant</td>");
            document.write("<td>$162,700</td>");
            document.write("</tr>");
}

function checkGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
    document.write("Latitude: " + latitude);
    document.write("<br>Longitude: " + longitude);
}

function Mousie() {
    console.log("Stepped over my a mouse!")
}

function Muusie() {
    window.alert("Bye bye mouse!")
}

function teksi() {
    document.getElementById("textdata").value = "Please fill in the form with proper data.";
}

function counter() {
    keypressCount++;
    document.getElementById("textdata").innerHTML = keypressCount;
}

function nyt() {
    document.getElementById("textdata").value = "Done!"
}

function okei(event) {
    
    const x = event;
    const y = event;

    console.log(`Mouse Coordinates: X: ${x}, Y: ${y}`);

    document.getElementById("coordinates").innerHTML = `Coordinates: X: ${x}, Y: ${y}`;
}
