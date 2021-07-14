const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Animation function
function navAnimation(dir1, dir2) {
    navItems.forEach((nav, i) =>{
        nav.classList.replace(`slide-${dir1}-${i}`, `slide-${dir2}-${i}`);
    });
};
function toggleNav(){
    // Toggle: Menu bar on or off
    menuBars.classList.toggle('change');
    // Toggle: overlay
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        // Animate in - out
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animation in - Nav items
        navAnimation('out', 'in');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animation out - Nav items
        navAnimation('in', 'out');
    }
}

// Event Listners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) =>{
    nav.addEventListener('click', toggleNav);
});