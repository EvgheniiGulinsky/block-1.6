const links = [...document.querySelectorAll('.link')]

links.forEach(link => link.addEventListener('click', linkActivate))

function linkActivate(event){
    links.forEach(link => link.parentNode.classList.remove('header-nav__link--active'))
    event.target.parentNode.classList.add('header-nav__link--active')
}