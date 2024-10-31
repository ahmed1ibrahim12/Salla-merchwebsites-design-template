// Select the dropdown link and chevron icon
const dropdownLink = document.querySelector('.nav-link');
const chevronIcon = document.querySelector('.fa-chevron-down');

// Add click event listener to the dropdown link
dropdownLink.addEventListener('click', function () {
  // Toggle between chevron down and up
  chevronIcon.classList.toggle('fa-chevron-down');
  chevronIcon.classList.toggle('fa-chevron-up');
});
