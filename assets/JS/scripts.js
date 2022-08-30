let click_div = document.getElementById('nav-burger');
let show_menu = document.getElementById('burger-menu');

click_div.onclick = menu_function;

function menu_function() {
    show_menu.classList.toggle('mobile-menu-content');
}