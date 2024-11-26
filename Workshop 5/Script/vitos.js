document.getElementById("formi").addEventListener("submit", function(event) {
    const email = document.getElementById("sahko").value;
    const comment = document.getElementById("kommentti").value;
    const warning = document.getElementById("nyty");
    const warging = document.getElementById("nyt");

    if (email === "" || email.length < 6 || email.length > 15 || !email.includes("@")) {
        event.preventDefault();
        alert("Email must be in between 6 and 15 characters long and include @!");
        warning.style.color = "red";
    } 
    else if (comment === "") {
        event.preventDefault();
        alert("Comment cannot be empty!") 
        warging.style.color = "red";}

    else if (comment.length > 50) {
    alert("Comment cannot be over 50 characters!") 
    warging.style.color = "red";
    }
    else {
        alert("The form was submitted!")
    }
});

document.getElementById("theForm").addEventListener("submit", function(event){
    const type = document.getElementById("type").value;
    const years = document.getElementById("years").value;
    const cost = document.getElementById("cost");

    if (type === "platinum" || years === 1) {
        const plat = 25 * years;
        cost.innerHTML = `Total cost: $${plat}`;
    } 
    else if (type === "gold" || years === 1) {
        const gold = 20 * years;
        cost.innerHTML = `Total cost: $${gold}`;
    }
    else if (type === "premium" || years === 1) {
        const premium = 15 * years;
        cost.innerHTML = `Total cost: $${premium}`;
    } 
    else if (type === "basic" || years === 1) {
        const basic = 10 * years;
        cost.innerHTML = `Total cost: $${basic}`;
    } 
    else if (type === "platinum" || years => 2) {
        const plat = (25 * years)*0.8;
        cost.innerHTML = `Total cost: $${plat}`;
    } 
    else if (type === "gold" || years => 2) {
        const gold = (20 * years)*0.8;
        cost.innerHTML = `Total cost: $${gold}`;
    }
    else if (type === "premium" || years => 2) {
        const premium = (15 * years)*0.8;
        cost.innerHTML = `Total cost: $${premium}`;
    } 
    else if (type === "basic" || years => 2) {
        const basic = (10 * years)*0.8;
        cost.innerHTML = `Total cost: $${basic}`;
    } 
    else if (type === "platinum" || years => 5) {
        const plat = ((25 * years)*0.8)-5;
        cost.innerHTML = `Total cost: $${plat}`;
    } 
    else if (type === "gold" || years => 5) {
        const gold = ((20 * years)*0.8)-5;
        cost.innerHTML = `Total cost: $${gold}`;
    }
    else if (type === "premium" || years => 5) {
        const premium = ((15 * years)*0.8)-5;
        cost.innerHTML = `Total cost: $${premium}`;
    } 
    else if (type === "basic" || years => 5) {
        const basic = ((10 * years)*0.8)-5;
        cost.innerHTML = `Total cost: $${basic}`;
    } 
})


// shopping.js
// This script calculates an order total.
// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var shipping = document.getElementById('shipping').value;

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
    if (quantity > 100) {
        total = total - (2 * discount);
    } else {

        total = total - discount;
    }
    total = total + (1.0 * shipping);
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    /* if(theForm.addEventListener){
        theForm.addEventListener("submit", code ,false);
    } */

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;