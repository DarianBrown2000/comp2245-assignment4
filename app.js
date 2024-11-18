document.getElementById('search-btn').addEventListener('click', function () {
    fetch('superheroes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Expecting plain text or HTML
        })
        .then(data => {
            // Display the superhero list in an alert
            alert(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            alert('There was a problem fetching the superhero list.');
        });
});