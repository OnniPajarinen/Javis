function changeHeading() {
    document.getElementById("h1").innerHTML = "Modified Heading!";
}

function secondButton() {
    document.getElementById("h2").style.color = "white";
    document.getElementById("h2").style.backgroundColor = "black";
    document.getElementById("h2").style.fontFamily = "verdana";
    document.getElementById("h2").style.fontSize = "xx-large";
}

function thirdButton() {
    document.getElementById("okei").style.backgroundColor = "lightgrey";
    document.getElementById("jooh").innerHTML = "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.</li><br>";
    document.getElementById("joo").innerHTML = '<img src = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"></img>';
}

function hide() {
    document.getElementById("me").style.display = "none";
}

function show() {
    document.getElementById("me").style.display = "block";
}

function surprise() {
    const elements = document.getElementsByClassName("surprise");

    for(let element of elements) {
        element.style.fontSize = "20px";
    }
}

function nyttai() {
    const selectElement = document.getElementById("mySelect");
    const selectedValue= selectElement.value;
    alert("You chose " + selectedValue + "!")
}

function paalla() {
    const kuva = document.getElementById("carimage");
    kuva.style.borderRadius = "3px";
    kuva.style.borderColor = "red";
    kuva.style.borderStyle = "solid";
    kuva.style.borderWidth = "2px";
}


function poissa() {
    const kuva = document.getElementById("carimage");
    kuva.style.borderRadius = "0";
    kuva.style.borderColor = "transparent";
    kuva.style.borderStyle = "none";
    kuva.style.borderWidth = "0";
}

function nyttai() {
    const mySelect = document.getElementById("mySelect");
    const selectedCar = mySelect.value;
    const carImage = document.getElementById("carimage");

    if (selectedCar === "Audi") {
        carImage.src = "https://live.staticflickr.com/65535/52872504474_8db2890c06_3k.jpg";
    }
    else if (selectedCar === "BMW") {
        carImage.src = "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png";
    }
    else if (selectedCar === "Mercedes") {
        carImage.src = "https://live.staticflickr.com/65535/52490277922_8c570af37a_k.jpg";
    }
    else if (selectedCar === "Volvo") {
        carImage.src = "https://live.staticflickr.com/65535/52268362868_5b9fd40129_k.jpg";
    }
}

function changePosition() {
    carimage.style.position = "relative";
    carimage.style.left = "200px"
    carimage.style.top = "500px"
}

let position = 0;
let movingRight = true;

function doMove() {
    const img = document.getElementById("carimage");
    const maxWidth = window.innerWidth - img.offsetWidth;

   
    if (movingRight) {
        position += 50;
        if (position >= maxWidth) {
            movingRight = false;
        }
    } else {
        position -= 50;
        if (position <= 0) {
            movingRight = true;
        }
    }

    
    img.style.left = position + "px";
}

function fadeOut() {
    const element = document.getElementById("carimage");
    let opacity = 1;
    const interval = 50;
    const step = 0.05;

    const fadeEffect = setInterval(() => {
        opacity -= step;
        if (opacity <= 0) {
            clearInterval(fadeEffect);
            element.style.display = "none";
        }
        element.style.opacity = opacity;
    }, interval);
}

function remove() {
    document.getElementById("carimage").style.display = "none"
}

function insertRows() {
    var table = document.getElementById("data")
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("textfield").value;
    cell2.innerHTML = document.getElementById("textfield2").value;
    cell3.innerHTML = document.getElementById("textfield3").value;
}