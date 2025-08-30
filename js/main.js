// Archivo inicial de JavaScript
function randomColor() {
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}
document.querySelectorAll('header, nav, main, section, aside, footer').forEach(el => {
    el.style.background = randomColor();
});
