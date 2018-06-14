
// Scroll top //

const btn = document.querySelector('.scrolTopBtn');

const smoothScroll = (h) => {
    let i = h || 0;
    if (i < 200) {
        setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 10);
        }, 10);
    }
}

btn.addEventListener('click', () => smoothScroll());

// Sticky Header //

window.onscroll = function () { myFunction() };

var header = document.querySelector(".row1");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


// Burger //

var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');

sidebarBody.innerHTML = content.innerHTML;

var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass = 'hamburger-activated';

button.addEventListener('click', function (e) {
    e.preventDefault();

    this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function (e) {
    if (this.parentNode.classList.contains(activatedClass)) {
        if (e.repeat === false && e.which === 27)
            this.parentNode.classList.remove(activatedClass);
    }
});

overlay.addEventListener('click', function (e) {
    e.preventDefault();

    this.parentNode.classList.remove(activatedClass);
});