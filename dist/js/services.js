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