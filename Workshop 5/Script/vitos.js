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

document.getElementById("theForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const type = document.getElementById("type").value;
    const years = parseInt(document.getElementById("years").value, 10);
    const cost = document.getElementById("cost");
    const discountMessage = document.getElementById("discount-message");
    

    if (type === "platinum") baseRate = 25;
    else if (type === "gold") baseRate = 20;
    else if (type === "premium") baseRate = 15;
    else if (type === "basic") baseRate = 10;


    if (years >= 2 && years < 5) {
        totalCost *= 0.8;
        discountMessage.innerHTML = "You are eligible for a 20% discount!";
    } else if (years >= 5) {
        totalCost = (totalCost * 0.8) - 5;
        discountMessage.innerHTML = "You are eligible for a 20% discount and $5 off!";
    }

    cost.value = `Total cost: $${totalCost.toFixed(2)}`;
});


// shopping.js
// This script calculates an order total.
// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    console.log("-----------")
    // For storing the order total:
    var total;

    // Get references to the form values:
    let quantity = parseInt(document.getElementById('quantity').value);
    let price = parseFloat(document.getElementById('price').value);
    let tax = parseFloat(document.getElementById('tax').value);
    let discount = parseFloat(document.getElementById('discount').value);
    let shipping = parseFloat(document.getElementById('shipping').value);

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("Total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("Total after tax: " + total);

    // Factor in the discount:

    if (quantity > 100) {
        let discount2 = (discount / 100) * 2;
        discount = 1 - discount2
        console.log("Discount: " + discount)
        document.getElementById("discount").value = ((discount + discount2)*10) + " %"

        total = total * discount;
        console.log("Total: " + total)
    } else {
        discount = discount / 100;
        discount = 1 - discount
        console.log("Discount: " + discount)

        total = total * discount;
    }
    console.log("Total after discount: " + total);

    //Factor in the shipping:
    total = total + shipping
    console.log("Total after shipping: " + total)

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


document.getElementById("formula").addEventListener("submit", function(event) {
    const email = document.getElementById("sukka").value;
    const comment = document.getElementById("komment").value;
    const warning = document.getElementById("nyhto");
    const warging = document.getElementById("nauta");

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