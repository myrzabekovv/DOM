

const allDiv = document.getElementsByTagName('div')
let listDiv = Array.from(allDiv)
const h1 = document.querySelector('h1')
const menu = document.querySelector('menu')
const menuButton = document.getElementsByTagName('button')
let listbtn = Array.from(menuButton)
listbtn[0].className = 'header__menu-button'
listbtn[1].className = 'subscribe__button'

listDiv[0].className = 'header'
listDiv[1].className = 'header__content'
listDiv[2].className = 'gallery__item'
listDiv[3].className = 'gallery__item'
listDiv[4].className = 'gallery__item'
listDiv[5].className = 'gallery__item'
listDiv[6].className = 'gallery__item'
listDiv[7].className = 'gallery__item'
listDiv[8].className = 'subscribe'

h1.className = 'logo'
menu.className = 'menu'
menu.className = 'header__menu'
// menuButton.className = 'header__menu-button'

const section = document.querySelector('section')
section.className = 'gallery'

const img = document.getElementsByTagName('img')
let listImg = Array.from(img)
listImg[0].className = 'gallery__item__image'
listImg[1].className = 'gallery__item__image'
listImg[2].className = 'gallery__item__image'
listImg[3].className = 'gallery__item__image'
listImg[4].className = 'gallery__item__image'
listImg[5].className = 'gallery__item__image'

const imputSub = document.querySelector('input')
imputSub.className = 'subscribe__input'

const p = document.getElementsByTagName('p')
let listP = Array.from(p)
listP[0].className = 'gallery__item__text'
listP[1].className = 'gallery__item__text'
listP[2].className = 'gallery__item__text'
listP[3].className = 'gallery__item__text'
listP[4].className = 'gallery__item__text'
listP[5].className = 'gallery__item__text'
listP[6].className = 'subscribe__text'

const h3 = document.querySelectorAll('h3')
let h3Array = Array.from(h3)
h3Array[0].className = 'gallery__item__text'
h3Array[1].className = 'gallery__item__text'
h3Array[2].className = 'gallery__item__text'
h3Array[3].className = 'gallery__item__text'
h3Array[4].className = 'gallery__item__text'
h3Array[5].className = 'gallery__item__text'