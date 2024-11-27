function getData() {
    
    const destination = document.getElementById("destination").value;
    const arrival = document.getElementById("arrival").value;
    const checkboxes = document.querySelectorAll("#services input[type='checkbox']");
    const services = [];
    checkboxes.forEach((checkbox) => {
        if(checkbox.checked) {
            services.push(checkbox.value);
        }
    })

    localStorage.setItem("destination", destination);
    localStorage.setItem("arrival", arrival)
    localStorage.setItem("services", services)

    alert("Thank you for reserving with us!")
}

function pelottavaa() {
    const destination = localStorage.getItem("destination");
    const arrival = localStorage.getItem("arrival");
    const services = localStorage.getItem("services");

    document.getElementById("sessionData").innerHTML = 
    "Destination: " + 
    destination + "<br></br>" + 
    "Arrival: " + arrival + "<br></br>" + 
    "Services: " + services;

    console.log("Retrieved Data:");
    console.log("Destination:", destination);
    console.log("Arrival:", arrival);
    console.log("Services:", services);
}

function getDat() {
    const destination = document.getElementById("destinatio").value;
    const arrival = document.getElementById("arriva").value;
    
    const checkboxes = document.querySelectorAll("#service input[type='checkbox']");
    const services = [];
    checkboxes.forEach((checkbox) => {
        if(checkbox.checked) {
            services.push(checkbox.value);
        }
    });
    
    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("arrival", arrival);
    sessionStorage.setItem("services", JSON.stringify(services));

    alert("Thank you for reserving with us!");
}
