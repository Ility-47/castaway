/* Смена темы */

function changeSub() {
    const link = document.querySelectorAll('.header__menu__item a');
    const bioText = document.querySelector('.biography__text');
    const socLink = document.getElementsByTagName('i');
    const tagLight = [...link, ...socLink];
    const cout = tagLight.length;


    for (let i = 0; i < cout; i++) {
        tagLight[i].classList.toggle('lightA');
    }
    bioText.classList.toggle('lightText')
    document.body.classList.toggle('light');
}