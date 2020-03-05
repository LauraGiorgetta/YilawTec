"use strict"

const lateralnav = document.querySelector("nav.lateral");
const divfornav = document.createElement('div');
document.body.appendChild(divfornav);

LateralNav();
lateralnav.style.transition = 'all .5s'
window.addEventListener('scroll', () => {
    HeightNav();
})

window.addEventListener('resize', () => {
    HeightNav();
})

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

function HeightNav(){
    if (h1.className != 'grande') {
        lateralnav.style.marginTop = '6rem';
        lateralnav.style.height = 'calc(100vh - 6rem)';
    } else{
        lateralnav.style.marginTop = '9rem';
        lateralnav.style.height = 'calc(100vh - 9rem)';
    }
}
