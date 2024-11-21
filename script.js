function searchItems(event) {
    event.preventDefault(); // Prevent form submission
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    const allItemsContainer = document.getElementById('allItems');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Array of item IDs to search
    const itemIds = [
        'onlywear1', 
        'onlywear2', 
        'onlywear3', 
        'onlywear4', 
        'onlywear5',
        'onlywear6', 
        'onlywear7', 
        'onlywear8', 
        'onlywear9', 
        'onlywear10',
        'onlyacc1', 
        'onlyacc2', 
        'onlyacc3', 
        'onlyacc4', 
        'onlyacc5',
        'onlyacc6', 
        'onlyacc7', 
        'onlyacc8', 
        'onlyacc9', 
        'onlyacc10'
    ];

    // Filter item IDs based on the search input
    const filteredItems = itemIds.filter(id => id.includes(input));

    // Display the filtered items
    filteredItems.forEach(id => {
        const img = document.createElement('img');
        img.src = `assets/${id}.png`; // Assuming images are named according to IDs
        img.alt = id;
        img.className = 'col'; // Add Bootstrap column class
        resultsContainer.appendChild(img);
    });

    // If no results found
    if (filteredItems.length === 0) {
        resultsContainer.innerHTML = '<h3>No results found</h3>';
    }

    // Show all items if search input is empty
    if (input === '') {
        resultsContainer.innerHTML = ''; // Clear search results
        allItemsContainer.style.display = 'flex'; // Show all items
    } else {
        allItemsContainer.style.display = 'none'; // Hide all items
    }
}

// Show all items by default
document.addEventListener('DOMContentLoaded', () => {
    const allItemsContainer = document.getElementById('allItems');
    allItemsContainer.style.display = 'flex'; // Show all items on page load
});