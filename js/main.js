// Archivo inicial de JavaScript
// Colores hexadecimales sugeridos
const colors = ['#008000', '#497D15', '#9AE630', '#178236'];

function getRandomHexColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

document.querySelectorAll('header, nav, main, section, aside, footer').forEach(el => {
    el.style.background = getRandomHexColor();
});
