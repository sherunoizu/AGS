
const circle = document.querySelector(`.progress-ring__circle`);
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = ` ${circumference} ${circumference} `;
circle.style.strokeDashoffset = circumference;

function setProgress (percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

function changeProgress () {
    const btn = document.querySelector(`.play_btn`);
    const closeBtn = document.querySelector(`.btn_close`);
    btn.addEventListener(`mouseover`, () => {
        circle.style.strokeDashoffset = 0;
        showVideoTimeout = setTimeout(showVideo, 1900);
        btn.addEventListener(`mouseout`, () => {
            circle.style.strokeDashoffset = circumference;
            clearTimeout(showVideoTimeout);
            return;
        });
        
    });
    btn.addEventListener(`click`, () => {
        showVideo();
    });

    closeBtn.addEventListener(`click`, () => {
        hideVideo();
    });
   
}

function showVideo () {
    const video = document.querySelector(`.companyVideo__video`);
    const sectionContent = document.querySelector(`.companyVideo__wrapper`);
    const closeBtn = document.querySelector(`.btn_close`);
    sectionContent.style.opacity = `0`;

    setTimeout(() => {
        sectionContent.style.display = `none`;
    }, 600);
    
    video.style.transform = `translateX(-50%)`;
    closeBtn.style.transform = `translate(0px,25px)`;

}

function hideVideo () {
    const video = document.querySelector(`.companyVideo__video`);
    const sectionContent = document.querySelector(`.companyVideo__wrapper`);
    const closeBtn = document.querySelector(`.btn_close`);
    
    video.style.transform = `translateX(-200%)`;
    // video.style.display = `none`;
    closeBtn.style.transform = `translate(30px,25px)`;

    setTimeout(() => {
        sectionContent.style.opacity = `1`;
    }, 600);

    sectionContent.style.display = `flex`;
}

changeProgress();


function focusedInput() {
    const label = document.querySelectorAll(`.input-wrapper`);
    const input = document.querySelectorAll(`.text`);
    
    for (let i = 0; i < input.length; i++) {
       
        input[i].addEventListener(`focus`, () => {
            label[i].classList.add(`not-empty`);
        });
        input[i].addEventListener(`blur`, () => {
            if (input[i].value == ``) {
                
                label[i].classList.remove(`not-empty`);
            }
                
        });
                
    }
}

focusedInput();

function maskedInput() {
    // const telIput = document.querySelector(`input[name=phone]`);
    // telIput.mask("+7 (999) 999-99-99");
    var phoneMask = IMask(
        document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
     });
}

maskedInput();

function flipCard() {
    const flippingCard = document.querySelectorAll(`.flip-card`);

    const front = document.querySelectorAll(`.flip-card-front`);
    const back = document.querySelectorAll(`.flip-card-back`);


    for (let i =0; i < flippingCard.length; i++) {
        front[i].addEventListener(`click`, () => {
            flippingCard[i].classList.add(`flipped`);
        });
        back[i].addEventListener(`click`, () => {
            flippingCard[i].classList.remove(`flipped`);
        });
    }

}
flipCard();

function closeModal () {
    const close = document.querySelector(`.modal__close`);
    const overlay = document.querySelector(`.modal__overlay`);
    close.addEventListener(`click`, () => {
        overlay.classList.remove(`active`);
    });
}

closeModal();

function gallery () {
    const sliders = document.querySelectorAll(`.smallGallery__wrapper`);
    
    for (let i = 0; i < sliders.length; i++) {
        
        initSmallGallerySlider(sliders[i]);
    }
}

gallery();

function infoGallery () {
    // const infoSliders = document.querySelectorAll(`.info__gallery`);
    const infoSliders = document.querySelector(`.info__gallery`);
    initSmallGallerySlider(infoSliders);

    // for (let i = 0; i < infoSliders.length; i++) {
    //     initSmallGallerySlider(infoSliders[i]);
    // }
}

infoGallery();


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


function openInfo () {
    const info = document.querySelectorAll(`.info`);
    const photoHover = document.querySelectorAll(`.smallGallery__photo-hover`);

    

    for (let i = 0; i < info.length; i++) {
        info[i].addEventListener(`click`, () => {
            photoHover[i].classList.toggle(`active`);
        });
    }
}

openInfo();

function showMoreInfo () {
    const infoOverlay = document.querySelector(`.info__overlay`);
    const moreButtons = document.querySelectorAll(`.services__more`);
    const infoContent = document.querySelectorAll(`.info__content`);
    const infoClose = document.querySelector(`.info__close`);
    const button = document.querySelector(`.button_info`);

    for (let i = 0; i < moreButtons.length; i++) {
            moreButtons[i].addEventListener(`click`, () => {
            infoOverlay.classList.add(`active`);
            infoContent[i].classList.add(`active`);
            
            infoClose.addEventListener(`click`, () => {
                infoOverlay.classList.remove(`active`);
                infoContent[i].classList.remove(`active`);
            });
            button.addEventListener(`click`, () => {
                infoOverlay.classList.remove(`active`);
                infoContent[i].classList.remove(`active`);
            });
        });
    }

    
}

showMoreInfo();


function smoothScroll () {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

smoothScroll();










