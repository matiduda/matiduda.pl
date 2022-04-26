let scalable = document.querySelector('#scalable_logo');
let prlx = document.querySelector('.parallax_wrapper');

prlx.addEventListener("scroll", event => {
    if(prlx.scrollTop > 3500) {
        // Hide element
        scalable.style.display = 'none';
    } else {
        scalable.style.display = 'block';
    }
    scalable.style.backgroundSize = 50 + prlx.scrollTop * prlx.scrollTop / 200  + 'px';
}, { passive: true });

// Switch logo background depending on daytime
var currentTime = new Date().getHours();
if (7 > currentTime || currentTime >= 20) {
    scalable.setAttribute('style', 'mix-blend-mode: multiply;');
    scalable.style.filter = 'invert(100%)';

}
else {
    scalable.setAttribute('style', 'mix-blend-mode: screen;');
    scalable.style.filter = 'invert(0%)';
}