// Get all education items
const educationItems = document.querySelectorAll('.education');

// Convert NodeList to Array for easier manipulation
const educationArray = Array.from(educationItems);

// Sort the education items based on the education date (year)
educationArray.sort((a, b) => {
    const dateA = parseInt(a.querySelector('.education-date').textContent);
    const dateB = parseInt(b.querySelector('.education-date').textContent);
    return dateB - dateA; // Sort in descending order (most recent to oldest)
});

// Clear the existing education grid
const educationGrid = document.querySelector('.education-grid');
educationGrid.innerHTML = '';

// Append the sorted education items back to the education grid
educationArray.forEach((item) => {
    educationGrid.appendChild(item);
});
