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

