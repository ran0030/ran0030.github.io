function homeLink() {
    window.location.href = '/'
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.yearlink');
    const images = document.querySelectorAll('.mImage');

    links.forEach(link => {
        link.addEventListener('click', () => {
            const targetYear = link.getAttribute('data-target');

            links.forEach(l => l.classList.remove('selected'));
            link.classList.add('selected');

            images.forEach(img => {
                if (img.getAttribute('data-year') === targetYear) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        });
    });
});

let lastScroll = 0;
let scrollStart = 0;

const el = document.querySelector(".navbar");
const threshold = 100;

el.classList.add("visible");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // scrolling down
    if (currentScroll > lastScroll) {

        // start measuring when downward scroll begins
        if (scrollStart === 0) {
            scrollStart = lastScroll;
        }

        if (currentScroll - scrollStart > threshold) {
            el.classList.add("invisible");
            el.classList.remove("visible");
        }

    } else {
        // scrolling up → show immediately
        el.classList.add("visible");
        el.classList.remove("invisible");

        // reset the down-scroll tracker
        scrollStart = 0;
    }

    lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
        const element = document.getElementById("hero-vid");
        if (element) {
            element.disabled = true;
            element.style.display = "none";
            element.style.pointerEvents = "none";
        }
    }
});