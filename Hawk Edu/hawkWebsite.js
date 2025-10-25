   alert("Hello! This is Hawk Education.")


const button = document.getElementById("Purchase");

button.addEventListener("click", function() {
    // Show the first prompt and store the user's input
    let firstName = prompt("Please enter your credit card number. ");
    
    // Check if the user entered a first name
    if (firstName !== null && firstName !== "") {
        // Show the second prompt, which uses the first name
        let lastName = prompt("Hello! Is your card number " + firstName + "? Please enter pack.:");

        // Check if the user entered a last name
        if (lastName !== null && lastName !== "") {
            // Display the final message in an alert with the combined name
            alert("Do you want to use the credit card " + firstName + " to buy " + lastName + "?");
        } else {
            // If the second prompt was canceled or empty
            alert("Pack was not provided.");
        }
    } else {
        // If the first prompt was canceled or empty
        alert("Credit card number was not provided.");
     alert("You have purchased " + lastName)
    }    
});