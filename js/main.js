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