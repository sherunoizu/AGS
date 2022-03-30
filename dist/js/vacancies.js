function showConent () {
    const contentBlock = document.querySelectorAll(`.vacancies__block`);

    for (let j = 0; j < contentBlock.length; j++) {
        contentBlock[j].addEventListener(`click`, () => {
            contentBlock[j].classList.toggle(`active`);
        });
    }
}

showConent();