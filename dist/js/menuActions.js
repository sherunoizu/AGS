

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

// function changeTitle (obj) {
//     const sectionName = document.querySelector(`.serviceCatalog__sectionName`);
//     const txt = obj.querySelector(`div`).textContent;
//     sectionName.innerText = txt;
//     return;
// }

function submenu () {
    // const btn = document.querySelector(`.servicesCatalog__submenu_header`);
    const menuHeader = document.querySelector(`.servicesCatalog__submenu_header`);
    const  btn = document.querySelector(`.downArrow`);
    const list = document.querySelector(`.servicesCatalog__tabs`);
    const listItems = document.querySelectorAll(`.servicesCatalog__tab`);
    const close = document.querySelector(`.submenu__close`);
    

    btn.addEventListener(`click`, () => {
        menuHeader.classList.toggle(`active`);
        list.classList.toggle(`active`);
        close.classList.toggle(`active`);
    });

    close.addEventListener(`click`, () => {
        menuHeader.classList.remove(`active`);
        list.classList.remove(`active`);
        close.classList.remove(`active`);
         
    });

    for (let i = 0; i < listItems.length; i++) {
        
        listItems[i].addEventListener(`click`, () => {
            // changeTitle(listItems[i]);
            setTimeout( ()=>{
                menuHeader.classList.remove(`active`);
                list.classList.remove(`active`);
                close.classList.remove(`active`);
            }, 150);      
        });
    }
}

submenu();
