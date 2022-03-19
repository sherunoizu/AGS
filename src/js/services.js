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
    console.log(obj);
    const objSlider = obj.querySelector(`.gallery__slider`);
    const id = objSlider.id;

    
    var slider = tns({
        container: `#${id}`,
        // container: ".gallery__slider",
        items: 3,
        slideBy: '1',
        autoplay: true,
        autoplayButtonOutput: false,
        nav: false,
        controls: false,
        navPosition: 'bottom',
        // autoWidth: true,
        // center: true,
        loop: true,
        
        responsive: {
            769: {
                items: 3,
            },
            577: {
                items: 2,
            },
            320: {
                nav: true,
                items: 1
            }
        }
    });

    // console.log(slider);
    

    // if (itemsLenght > 3) {
    //     obj.querySelector('.prev').addEventListener('click', function () {
    //         slider.goTo('prev');
    //     });
    //     obj.querySelector('.next').addEventListener('click', function () {
    //         slider.goTo('next');
    //     });
    // } else {
    //     obj.querySelector(`.prev`).style.display = `none`;
    //     obj.querySelector(`.next`).style.display = `none`;
    // }

}