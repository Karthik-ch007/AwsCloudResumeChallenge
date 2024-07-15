async function get_visitors() {
    try {
        let response = await fetch('https://cc10jyg3h3.execute-api.ap-south-1.amazonaws.com/test/counter', {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response from the API
        let responseBody = await response.json();

        // Parse the body string again to access the count
        let data = JSON.parse(responseBody.body);

        // Access the 'count' property
        let countValue = data.count;

        // Update the HTML element with id="visitors" to display the count
        document.getElementById("visitors").innerHTML = countValue;

        // Log the count value to the console (for debugging)
        console.log(countValue);

        // Return the data if needed
        return data;
    } catch (err) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching data:', err);
    }
}

// Call the get_visitors() function to initiate the API request when the script runs
get_visitors();

// GET API REQUEST
// async function get_visitors() {
//     try {
//         let response = await fetch('https://cc10jyg3h3.execute-api.ap-south-1.amazonaws.com/test/counter', {
//             method: 'GET',
//         });

//         // Parse the JSON response from the API
//         let responseBody = await response.json();

//         // Parse the body string again to access the count
//         let data = JSON.parse(responseBody.body);

//         // Update the HTML element with id="visitors" to display the count
//         document.getElementById("visitors").innerHTML = data['count'];

//         // Log the response data to the console (for debugging)
//         console.log(data);

//         // Return the data if needed
//         return data;
//     } catch (err) {
//         // Handle any errors that occur during the fetch operation
//         console.error(err);
//     }
// }

// // Call the get_visitors() function to initiate the API request when the script runs
// get_visitors();
