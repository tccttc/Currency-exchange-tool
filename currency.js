document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function() {

    // Send a GET request to the URL
    fetch('https://latest.currency-api.pages.dev/v1/currencies/eur.json')

    // Get the response, and convert to json form
    .then(response => response.json())
    .then(data => {
        
        // The key part: get the user input
        // if the user input Uppercase, turn to lowercase
        const currency = document.querySelector('#currency').value.toLowerCase();

        // Get rate from data
        // const rate = data.eur.usd;
        const rate = data.eur[currency]; // using a variable instead ofa string
        console.log(rate) // This is for debugging

        // Valid case
        if (rate !== undefined) {
            // Display message on the screen, round up to 1 decimals
            // The API I used are using lower letter as keys
            // Convert back to uppercase
            const result = `1 EUR is equal to ${rate.toFixed(3)} ${currency.toUpperCase()}.`;

            // console.log(result);
            document.querySelector('#result').innerHTML = result;
        }
        else {
            document.querySelector('#result').innerHTML = 'Invalid Currency.';
            alert("Please input again!");
        }
        
    })

    // API can get down.
    // Catch any errors and log them to the console
    .catch(error => {
        console.log('Error:', error);
    });


    
    // we are not trying to submit the data to another page
    return false;         
}           
    
});
