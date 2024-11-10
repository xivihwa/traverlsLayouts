document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-sidebar');
    const sidebarList = document.querySelector('.sidebar-list');

    toggleButton.addEventListener('click', function() {
        if (sidebarList.style.display === 'none' || sidebarList.style.display === '') {
            sidebarList.style.display = 'block';
            toggleButton.querySelector('.toggle-icon').innerHTML = '▲'; 
        } else {
            sidebarList.style.display = 'none';
            toggleButton.querySelector('.toggle-icon').innerHTML = '▼';
        }
    });
});
