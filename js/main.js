
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