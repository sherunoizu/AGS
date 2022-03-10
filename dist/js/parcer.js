function pasteHeader () {
    const body = document.querySelector(`.body`);
    const header = returnHeader();
    const overlay = returnOverlay();
    console.log(header);
    body.append(header);
    body.append(overlay);
}

pasteHeader();

