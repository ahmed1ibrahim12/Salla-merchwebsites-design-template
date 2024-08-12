document.querySelectorAll('.btn.save i').forEach(icon => {
    icon.addEventListener('click', function () {
        if (icon.classList.contains('fa-regular')) {
            // Change to solid heart with red color
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.style.color = 'red';
        } else {
            // Change back to regular heart with original color
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.style.color = ''; // Remove inline color to revert to original CSS color
        }
    });
});

// Make the time work
document.addEventListener('DOMContentLoaded', () => {
    const dayEl = document.querySelector('.day');
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.seconds');
  
    function updateTime() {
      let days = parseInt(dayEl.textContent);
      let hours = parseInt(hourEl.textContent);
      let minutes = parseInt(minuteEl.textContent);
      let seconds = parseInt(secondEl.textContent);
  
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        seconds = 59;
        minutes--;
      } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
      } else if (days > 0) {
        seconds = 59;
        minutes = 59;
        hours = 23;
        days--;
      }
  
      dayEl.innerHTML = `${String(days).padStart(2, '0')} <br><span>يوم</span>`;
      hourEl.innerHTML = `${String(hours).padStart(2, '0')} <br><span>ساعة</span>`;
      minuteEl.innerHTML = `${String(minutes).padStart(2, '0')} <br><span>دقيقة</span>`;
      secondEl.innerHTML = `${String(seconds).padStart(2, '0')} <br><span>ثانية</span>`;
    }
  
    setInterval(updateTime, 1000);
  });
  


  //working sorting system
  function changeSortOrder(order) {
    const sortDropdown = document.getElementById('sortDropdown');
    sortDropdown.innerHTML = `${order} <i class="fa-solid ${order === 'من الأعلى إلى الأقل' ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>`;
    // Additional logic for sorting can be added here
}

//Sorting system
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');

gridViewBtn.addEventListener('click', function() {
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
    document.querySelector('.products').classList.add('grid-view'); // Add grid-view class
    document.querySelector('.products').classList.remove('list-view'); // Remove list-view class
});

listViewBtn.addEventListener('click', function() {
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
    document.querySelector('.products').classList.add('list-view'); // Add list-view class
    document.querySelector('.products').classList.remove('grid-view'); // Remove grid-view class
});




//Show more button
function toggleDivs() {
  const hiddenDivs = document.querySelectorAll('.hide');
  const toggleButton = document.getElementById('toggleButton');

  hiddenDivs.forEach(div => {
      if (div.style.display === 'none' || div.style.display === '') {
          div.style.display = 'flex';
      } else {
          div.style.display = 'none';
      }
  });

  if (toggleButton.textContent === "عرض المزيد") {
      toggleButton.textContent = "عرض اقل";
  } else {
      toggleButton.textContent = "عرض المزيد";
  }
}

document.getElementById('toggleButton').addEventListener('click', toggleDivs);

//working search bar
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', function() {
    const searchTerm = searchBar.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(function(product) {
        const title = product.querySelector('.title').textContent.toLowerCase();
        const subtitle = product.querySelector('.substitle').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || subtitle.includes(searchTerm)) {
          product.style.setProperty('display', 'flex', 'important');
          product.style.setProperty('width', '100%', 'important');
        } else {
          product.style.setProperty('display', 'none', 'important');
        }
    });
});

//reverse sorter button
let defaultOrder = []; // Array to store the default order of divs

function changeSortOrder(order) {
    const productsContainer = document.querySelector('.products');
    const products = Array.from(productsContainer.querySelectorAll('.product'));
    const sortDropdown = document.getElementById('sortDropdown');
    
    // Store the default order if not already done
    if (defaultOrder.length === 0) {
        defaultOrder = products.map(product => product.cloneNode(true)); // Clone products to preserve default order
    }
    
    if (order === 'من الأعلى إلى الأقل') {
        // Restore default order
        productsContainer.innerHTML = ''; // Clear current products
        defaultOrder.forEach(product => productsContainer.appendChild(product)); // Append products in default order
        sortDropdown.innerHTML = 'من الأعلى إلى الأقل <i class="fa-solid fa-chevron-up"></i>'; // Update dropdown text
    } else if (order === 'من الأقل إلى الأعلى') {
        // Reverse order
        productsContainer.innerHTML = ''; // Clear current products
        products.reverse(); // Reverse the order
        products.forEach(product => productsContainer.appendChild(product)); // Append reversed products
        sortDropdown.innerHTML = 'من الأقل إلى الأعلى <i class="fa-solid fa-chevron-down"></i>'; // Update dropdown text
    }
}


 // Get the current range values
 rangeSlider.noUiSlider.on('update', function(values) {
     console.log('Selected range:', values);
 });

//range input with two handles
var sliderOne = document.getElementById("slider-1");
var sliderTwo = document.getElementById("slider-2");
var displayValOne = document.getElementById("range1");
var displayValTwo = document.getElementById("range2");
var minGap = 100;
var sliderTrack = document.querySelector(".slider-track");
var sliderMaxValue = sliderOne.max;
 
 function slideOne() {
    let sliderOne = document.getElementById("slider-1");
    let range1 = document.getElementById("range1");
    range1.value = sliderOne.value; // Update the number input
}

function slideTwo() {
    let sliderTwo = document.getElementById("slider-2");
    let range2 = document.getElementById("range2");
    range2.value = sliderTwo.value; // Update the number input
}

function updateSliderOne() {
    let sliderOne = document.getElementById("slider-1");
    let range1 = document.getElementById("range1");
    sliderOne.value = range1.value; // Update the slider position
}

function updateSliderTwo() {
    let sliderTwo = document.getElementById("slider-2");
    let range2 = document.getElementById("range2");
    sliderTwo.value = range2.value; // Update the slider position
}

//price filter
fdocument.addEventListener('DOMContentLoaded', function() {
    function updateSlider() {
        // Get slider values
        const minVal = parseFloat(document.getElementById('slider-1').value);
        const maxVal = parseFloat(document.getElementById('slider-2').value);

        // Update displayed range values
        document.getElementById('range1').textContent = minVal;
        document.getElementById('range2').textContent = maxVal;

        // Get all product elements
        const products = document.querySelectorAll('.product');

        // Loop through each product and update visibility
        products.forEach(product => {
            // Extract the main price from the product
            const priceText = product.querySelector('.price').textContent.trim().split(' ')[0];
            const priceValue = parseFloat(priceText.replace(/[^0-9.-]/g, '')); // Extract price number

            // Check if price is within the selected range
            if (priceValue >= minVal && priceValue <= maxVal) {
                product.style.display = 'flex'; // Show product
            } else {
                product.style.display = 'none'; // Hide product
            }
        });
    }

    // Initialize the slider display
    updateSlider();

    // Add event listeners to sliders
    document.getElementById('slider-1').addEventListener('input', updateSlider);
    document.getElementById('slider-2').addEventListener('input', updateSlider);
});

//add and subtract button
document.querySelector('.add-button-1').addEventListener('click', function() {
    const numberElement = document.querySelector('.number-1');
    let number = parseInt(numberElement.textContent);
    numberElement.textContent = number + 1;
});

document.querySelector('.less-button-1').addEventListener('click', function() {
    const numberElement = document.querySelector('.number-1');
    let number = parseInt(numberElement.textContent);
    if (number > 0) {
        numberElement.textContent = number - 1;
    }
});

document.querySelector('.add-button-2').addEventListener('click', function() {
    const numberElement = document.querySelector('.number-2');
    let number = parseInt(numberElement.textContent);
    numberElement.textContent = number + 1;
});

document.querySelector('.less-button-2').addEventListener('click', function() {
    const numberElement = document.querySelector('.number-2');
    let number = parseInt(numberElement.textContent);
    if (number > 0) {
        numberElement.textContent = number - 1;
    }
});

document.querySelector('.add-button-3').addEventListener('click', function() {
    const numberElement = document.querySelector('.number-3');
    let number = parseInt(numberElement.textContent);
    numberElement.textContent = number + 1;
});

document.querySelector('.less-button-3').addEventListener('click', function() {
    const numberElement = document.querySelector('.number-3');
    let number = parseInt(numberElement.textContent);
    if (number > 0) {
        numberElement.textContent = number - 1;
    }
});


//reverse reviews button
function changeSortOrder(order) {
    const commentsContainer = document.querySelector('.comment-list');
    const comments = Array.from(commentsContainer.querySelectorAll('.comment'));
    const showMoreButton = document.querySelector('.show-more');

    if (order === 'الاقدم') {
        comments.reverse();
    }

    comments.forEach(comment => {
        commentsContainer.appendChild(comment);
    });
}

if (order === 'الاقدم') {
    comments.reverse().forEach(comment => commentList.insertBefore(comment, showMoreButton));
} else {
    comments.sort().forEach(comment => commentList.insertBefore(comment, showMoreButton));
}

// Ensure that the default order is maintained when "الاحدث" is selected
document.getElementById('sortDropdown1').addEventListener('click', function(event) {
    if (event.target.textContent.trim() === 'الاحدث') {
        const commentsContainer = document.querySelector('.comments');
        const comments = Array.from(commentsContainer.querySelectorAll('.comment'));

        comments.forEach(comment => {
            commentsContainer.appendChild(comment);
        });
    }
});


//something
function activateContent(index) {
    // Remove active class from all buttons
    document.querySelectorAll('.top-header button').forEach(button => {
        button.classList.remove('active-button');
    });

    // Remove active class from all content divs
    document.querySelectorAll('.info-container > div').forEach(div => {
        div.classList.remove('active');
    });

    // Add active class to the clicked button and corresponding content div
    document.querySelector(`.top-header button:nth-child(${index})`).classList.add('active-button');
    document.querySelector(`.info-${index}`).classList.add('active');
}