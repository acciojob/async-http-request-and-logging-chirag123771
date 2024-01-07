//your JS code here. If required.
// Using Fetch API for making asynchronous HTTP request
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Log the response in a human-readable format
        console.log('Response:');
        console.log('User ID:', data.userId);
        console.log('ID:', data.id);
        console.log('Title:', data.title);
        console.log('Completed:', data.completed);
    })
    .catch(error => {
        // Log any errors that occurred during the request
        console.error('Error:', error.message);
    });

