function homeLink() {
    window.location.href='/'
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