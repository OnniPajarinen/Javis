function getData() {
    // Get the values from the input fields
    const destination = document.getElementById("destination").value.trim();
    const arrivalDate = document.getElementById("arrival").value.trim();

    // Get selected services
    const checkboxes = document.querySelectorAll("#services input[type='checkbox']");
    const selectedServices = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedServices.push(checkbox.value);
        }
    });

    // Validate inputs
    if (!destination || !arrivalDate) {
        alert("Please fill out all fields!");
        return;
    }

    if (selectedServices.length === 0) {
        alert("Please select at least one service!");
        return;
    }

    // Save data to LocalStorage
    localStorage.setItem("destination", destination);
    localStorage.setItem("arrivalDate", arrivalDate);
    localStorage.setItem("services", JSON.stringify(selectedServices));

    // Notify the user
    alert("Data has been saved to LocalStorage!");

    // Log saved data for debugging
    console.log("Saved Data:");
    console.log("Destination:", destination);
    console.log("Arrival Date:", arrivalDate);
    console.log("Services:", selectedServices);
}
