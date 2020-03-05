//Efecto cambiar con scroll
const h1 = document.querySelector('h1');

if (window.innerWidth > 1040) {
    h1.className = 'grande';
}
scrollFunction();
window.addEventListener('resize', function () {
    if (window.innerWidth > 1400) {
        document.querySelector('header').style.padding = '1.5rem 8rem';
        h1.style.fontSize = '3rem';
        h1.className = 'grande';

    } else if (window.innerWidth > 1040) {
        document.querySelector('header').style.padding = '1.5rem 4rem';
        h1.style.fontSize = '3rem';
        h1.className = 'grande';
    } else if (window.innerWidth < 380) {
        document.querySelector('header').style.padding = '0 2rem';
        document.querySelector('.xmenu').style.right = '2rem';
        h1.style.fontSize = '2rem';
        h1.className = '';
    }
    else {
        h1.className = '';

    }
    scrollFunction();
});

function scrollFunction() {
    if (window.innerWidth > 1400) {
        window.onscroll = function () {

            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.querySelector('header').style.padding = '0 8rem';
                h1.style.fontSize = '2rem';
                h1.className = '';
            } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                h1.className = 'mediano';
                h1.style.fontSize = '2.5rem';
                h1.className = '';

            } else {
                document.querySelector('header').style.padding = '1.5rem 8rem';
                h1.style.fontSize = '3rem';
                h1.className = 'grande';
            }
        };
        console.log("1400")
    }
    else if (window.innerWidth > 1040) {
        window.onscroll = function () {

            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.querySelector('header').style.padding = '0 4rem';

            }

            else {
                document.querySelector('header').style.padding = '1.5rem 4rem';

            }
        };
        console.log("1040")
    }
    else if (window.innerWidth < 380) {
        window.onscroll = function () {

            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.querySelector('header').style.padding = '0 2rem';
                document.querySelector('.xmenu').style.right = '2rem'

            }

            else {
                document.querySelector('header').style.padding = '0 2rem';
                document.querySelector('.xmenu').style.right = '2rem'
            }
        };
        console.log("380")
    }

    else {
        h1.style.fontSize = '2rem';
        document.querySelector('header').style.padding = '0 4rem';
        window.onscroll = () => { }
    }
}
//Fin efecto cambiar con scroll

//responsive
//agregar divs al nav
const div = document.createElement('div');
const nav = document.querySelector('nav');
const newdiv = nav.insertBefore(div, document.querySelector('ul'));
newdiv.className = 'xmenu';
newdiv.innerHTML = '<div></div><div></div><div></div>';
//fin de agregar divs

newdiv.onclick = () => {
    menu(newdiv);
    rblur();
}

function menu(x) {
    x.classList.toggle('cruz');
    if (document.querySelector('.xmenu').className == 'xmenu cruz') {
        nav.className = "stroke active";
        rblur();
    }
    else {
        nav.className = "stroke";
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1040) {
        document.querySelector('.xmenu').classList.add('cruz');
        nav.className = "stroke active";
        rblur();
    }

});

//blur
function rblur() {
    if (document.querySelector('.xmenu').className == 'xmenu cruz' && window.innerWidth < 1040) {
        document.querySelector('section').style.filter = 'blur(2px)';
    }
    else document.querySelector('section').removeAttribute('style');
}
rblur();