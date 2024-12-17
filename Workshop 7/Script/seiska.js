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

    xmlhttp.open("GET", "http://quotes.rest/quote/random.json?api_key=<xQy6XHupBMKzh72aQyfdLbjHCG01AOtfMx1s2ATe1b41bb7d>", true);    
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
    let quoteOutput = ""
    let authorOutput = ""
    var tokaquot = document.getElementsByTagName("tokaquot");

    for (let i = 0; i < tokaquot.length; i++) {
        var quote = tokaquot[i].getElementsByTagName("quote")[0].textContent;
        var author = tokaquot[i].getElementsByTagName("author")[0].textContent;

        quoteOutput += `<p>${quote}</p>`;
        authorOutput += `<p>${author}</p>`;
        
        document.getElementById("quu").innerHTML = quoteOutput;
        document.getElementById("aa").innerHTML = authorOutput;
}
document.getElementById("turha").innerHTML = ""

}

function loadAndParseNews(fiidi) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", fiidi, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmldoc = xmlhttp.responseXML;

            let items = xmldoc.getElementsByTagName("item");

            let output = "<ul>";

            for (let i = 0; i < items.length; i++) {
                let title = items[i].getElementsByTagName("title")[0].textContent;
                let link = items[i].getElementsByTagName("link")[0].textContent;

                output += `<li><a href="${link}" target="_blank">${title}</a></li>`;
            }

            output += "</ul>";

            document.getElementById("newsfeed").innerHTML = output;
        } else if (xmlhttp.readyState == 4) {
            document.getElementById("newsfeed").innerHTML = "Ei toimi! Pääsy hylätty linkkeihin, mutta koodini löytyy!";
        }
    };
}
