const feedbackOpenHeaderButton = document.getElementById("feedbackOpenHeader");
const feedbackOpenSideButton = document.getElementById("feedbackOpenSide");
const feedbackCloseButton = document.getElementById("feedbackClose");
const feedbackModal = document.getElementById("feedback");
const body = document.querySelector("body");
const main = document.getElementById('main');
const nav = document.getElementById('side-nav');



function feedbackOpen() {
    feedbackModal.classList.add("feedback--visible");
    main.classList.add('main-content--blured');
    nav.classList.add('side-nav--blured');
    body.style.position="fixed"
}

function feedbackClose() {
    feedbackModal.classList.remove("feedback--visible");
    main.classList.remove('main-content--blured');
    nav.classList.remove('side-nav--blured');
    body.style.position="static"
}

feedbackCloseButton.addEventListener("click", feedbackClose);
feedbackOpenHeaderButton.addEventListener("click", feedbackOpen);
feedbackOpenSideButton.addEventListener("click", feedbackOpen);
