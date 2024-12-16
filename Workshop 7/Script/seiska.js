function parseData() {
    let output = ""
    var quotes = document.getElementsByTagName("quotes");

    for (let i = 0; i < quotes.length; i++) {
        var quote = quotes[i].getElementsByTagName("quote")[0].textContent;
        var author = quotes[i].getElementsByTagName("author")[0].textContent;

        output += `${quote}<br>${author}<br><br>`;
    }

    document.getElementById("output").innerHTML = output;
}

function loadXMLFile(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://quotes.rest/qod", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("quotes").innerHTML = xmlhttp.responseText
        }
        else if (xmlhttp.readyState == 4){
            document.getElementById("quotes").innerHTML = "Ei toimi! Pääsy hylätty linkkeihin, mutta koodini löytyy!";
        }
    
    };
}

function loadAndParseXML() {

}