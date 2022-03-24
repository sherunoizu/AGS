//Смена секций в каталоге
function switchSections () {
    const chapter = document.querySelectorAll(`.servicesCatalog__tab`);
    const descr = document.querySelectorAll(`.servicesCatalog__item`);


    for (let i = 0; i < chapter.length; i++) {
        chapter[i].addEventListener(`click`, () => {
            for (let j = 0; j < chapter.length; j++) {
                chapter[j].classList.remove(`active`);
                descr[j].classList.remove(`active`);
            }
            chapter[i].classList.add(`active`);
            descr[i].classList.add(`active`);
        });
    }
}

switchSections();

function switchTech () {
    const techTab = document.querySelectorAll(`.tech__tab`);
    const techItem = document.querySelectorAll(`.tech__item `);

    for (let i = 0; i < techTab.length; i++) {
        techTab[i].addEventListener(`click`, () => {
            for (let j = 0; j < techTab.length; j++) {
                techTab[j].classList.remove(`active`);
                techItem[j].classList.remove(`active`);
            }
            techTab[i].classList.add(`active`);
            techItem[i].classList.add(`active`);
        });
    }
}

switchTech();

function gallery () {
    const sliders = document.querySelectorAll(`.servicesCatalog__item`);


    for (let i = 0; i < sliders.length; i++) {
        start(sliders[i]);
    }

    const hitachiSlider = document.querySelector(`#hitachiSlider`);
    start(hitachiSlider);
}

gallery();

function start (obj) {
    const objSlider = obj.querySelector(`.gallery__slider`);
    const id = objSlider.id;

    
    var slider = tns({
        container: `#${id}`,
        items: 3,
        slideBy: '1',
        autoplay: true,
        autoplayButtonOutput: false,
        nav: false,
        controls: false,
        navPosition: 'bottom',
        
        loop: true,
        
        responsive: {
            769: {
                items: 3,
            },
            577: {
                preventScrollOnTouch: "force",
                items: 2,
            },
            320: {
                preventScrollOnTouch: "force",
                nav: true,
                items: 1
            }
        }
    });


}