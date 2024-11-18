document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const query = searchField.value.trim(); // Get and sanitize user input
    const resultDiv = document.getElementById('result');

    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Expecting text (HTML or plain text)
        })
        .then(data => {
            resultDiv.innerHTML = data; // Display the result in the #result div
        })
        .catch(error => {
            console.error('Fetch error:', error);
            resultDiv.innerHTML = '<p>There was an error fetching the superhero data. Please try again later.</p>';
        });
});
