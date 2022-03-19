function showContent () {
    const dates = document.querySelectorAll(`.gallery-item__date`);
    const datesSpan = document.querySelectorAll(`.span`);
    const contents = document.querySelectorAll(`.content`);
    const wrappers = document.querySelectorAll(`.gallery-item__wrapper`);
    
    for (let i = 0; i < dates.length; i++) {
        dates[i].addEventListener(`click`, () => {
            datesSpan[i].classList.toggle(`active`);
            contents[i].classList.toggle(`active`);
            
            if (wrappers[i].classList.contains(`hidden`)) {
                wrappers[i].classList.remove(`hidden`);
            } else {
                setTimeout( ()=>{
                    wrappers[i].classList.add(`hidden`);
                }, 300);
            }

            
        });
    }
}

showContent();


function gallery () {
    const sliders = document.querySelectorAll(`.gallery-item__wrapper`);

    for (let i = 0; i < sliders.length; i++) {
        
        start(sliders[i]);
    }
}

gallery();

function start (obj) {
    const objSlider = obj.querySelector(`.gallery-item__slider`);
    const itemsLenght = objSlider.querySelectorAll(`.gallery-item__slider_item`).length;
    const id = objSlider.id;
    var slider = tns({
        container: `#${id}`,
        items: 3,
        gutter: '15',
        slideBy: '1',
        controls: false,
        nav: false,
        navPosition: `bottom`,
        arrowKeys: true,
        autoplay: false,
        loop: false,
        responsive: {

        }
    });
    

    if (itemsLenght > 3) {
        obj.querySelector('.prev').addEventListener('click', function () {
            slider.goTo('prev');
        });
        obj.querySelector('.next').addEventListener('click', function () {
            slider.goTo('next');
        });
    } else {
        obj.querySelector(`.prev`).style.display = `none`;
        obj.querySelector(`.next`).style.display = `none`;
    }

    

}
