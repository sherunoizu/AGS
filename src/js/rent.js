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

function rentGallery () {
    const rentSliders = document.querySelectorAll(`.rent__gallery`);
    // initSmallGallerySlider(rentSliders[0]);
    // console.log(rentSliders[0]);

    for (let i = 0; i < rentSliders.length; i++) {
        initSmallGallerySlider(rentSliders[i]);
    }
}

rentGallery();


function initSmallGallerySlider (obj) {
    const objSlider = obj.querySelector(`.slider`);
    const id = objSlider.id;

    var slider = tns({
        container: `#${id}`,
        items: 1,
        swipeAngle: false,
        slideBy: '1',
        controls: false,
        nav: false,
        navPosition: `bottom`,
        arrowKeys: true,
        autoplay: false,
        loop: false,
        touch: false,
        responsive: {
            993: {
               
            },
            769: {
                // nav: false,
            },
            577: {
                preventScrollOnTouch: "force",
                // nav: true
            },
            320: {
                
            }
        }
    });

    const sld = obj.querySelectorAll(`.tns-item`);
    const prev = obj.querySelector('.prev');
    const next = obj.querySelector('.next');

    if (sld[0].classList.contains(`tns-slide-active`)) {
        prev.classList.add(`disabled`);
        next.classList.add(`active`);
    }
   
    prev.addEventListener('click', function () {
        slider.goTo('prev');
        if (sld[0].classList.contains(`tns-slide-active`)) {
            prev.classList.add(`disabled`);
            next.classList.add(`active`);
        }
        next.classList.remove(`disabled`);
        next.classList.add(`active`);
    });
    next.addEventListener('click', function () {
        slider.goTo('next');
        if (sld[sld.length -1].classList.contains(`tns-slide-active`)){
            next.classList.remove(`active`);
            prev.classList.add(`disabled`);
        }
        prev.classList.remove(`disabled`);
        prev.classList.add(`active`);
    });

}