// Dynamically set the current year in the footer
const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

// Dynamically set the last modified date
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
