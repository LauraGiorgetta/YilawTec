"use strict"

const lateralnav = document.querySelector("nav.lateral");
const divfornav = document.createElement('div');
document.body.appendChild(divfornav);

LateralNav();
if (h1.className != 'grande') {
    lateralnav.style.position = '6rem';
}

window.addEventListener('resize', () => {
    LateralNav();
    if (h1.className != 'grande') {
        lateralnav.style.top = '6rem';
    }
});

function LateralNav() {
    if (window.innerWidth < 1040) {
        divfornav.className = 'lateralnav';
        divfornav.innerHTML = '>';

        lateralnav.style.left = '-30rem';
        divfornav.onclick = () => {

            if (lateralnav.style.left == '-30rem') {
                lateralnav.style.left = '0px';
            } else if (lateralnav.style.left == '0px') {
                lateralnav.style.left = '-30rem';
            }
        }
    }
    if (window.innerWidth >= 1040) {
        lateralnav.style.left = '0px';
    }
}

