document.getElementById('changeFontBtn').addEventListener('click', () => {
    document.body.classList.toggle('bg-alt');
    const isBodoni = document.body.style.fontFamily === "'Bodoni Moda', serif";
    document.body.style.fontFamily = isBodoni ? "'Roboto', sans-serif" : "'Bodoni Moda', serif";
});

document.getElementById('moreInfoBtn').addEventListener('click', () => {
    document.getElementById('modal').style.display = "block";
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
