function toggleHeader(humburger) {
    const hidingElement = document.querySelectorAll(`.hiding`);

    if (humburger.classList.contains(`active`)) {
        for (let i = 0; i < hidingElement.length; i++) {
            // hidingElement[i].style.opacity = '0';
            hidingElement[i].style.opacity = '0';
        }
    } else {
        for (let i = 0; i < hidingElement.length; i++) {
            hidingElement[i].style.opacity = '1';
        }
    }
  
}



function menu() {
    const humburger = document.querySelector(`.humburger`);
    const overlay = document.querySelector(`.overlay`);
    // const menu = document.querySelector(`.header__menu-item`);

    
    humburger.addEventListener(`click`, () => {
        humburger.classList.toggle(`active`);
        overlay.classList.toggle(`active`);
        toggleHeader(humburger);
        return;
    });
   
    overlay.addEventListener(`click`, () => {
        humburger.classList.remove(`active`);
        overlay.classList.remove(`active`);
        toggleHeader(humburger);
    });
}

menu();
