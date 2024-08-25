//filter hide and show
document.querySelectorAll('.drop').forEach(button => {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var filterTypeDiv = document.getElementById(targetId);
        var icon = this.querySelector('i');
  
        if (filterTypeDiv.style.display === 'none' || filterTypeDiv.style.display === '') {
            filterTypeDiv.style.setProperty('display', 'block', 'important');
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            filterTypeDiv.style.setProperty('display', 'none', 'important');
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
  });