"use strict"

if (window.innerWidth < 1000) {
    const divfornav = document.createElement('div');
    document.body.appendChild(divfornav);

    divfornav.className = 'lateralnav';
    divfornav.innerHTML = '>';

    const lateralnav = document.querySelector("nav.lateral");
    lateralnav.style.left = '-30rem';
    divfornav.onclick = () => {

        if (lateralnav.style.left == '-30rem') {
            lateralnav.style.left = '0px';
        } else if (lateralnav.style.left == '0px') {
            lateralnav.style.left = '-30rem';
        }
    }
}