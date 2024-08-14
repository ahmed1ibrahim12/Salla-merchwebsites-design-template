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
