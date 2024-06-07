/* в этот файл добавляет скрипты*/
const mainNavList = document.querySelector('.main-nav__list');
const toggleButton = document.querySelector('.toggle');

mainNavList.classList.remove('main-nav__list--no-js');

toggleButton.addEventListener('click',() => {
  if (toggleButton.classList.contains('main-nav__toggle--closed')) {
    toggleButton.classList.remove('main-nav__toggle--closed');
    toggleButton.classList.add('main-nav__toggle--opened');
    mainNavList.classList.remove('main-nav__list--closed');
    mainNavList.classList.add('main-nav__list--opened');

  } else {
    toggleButton.classList.add('main-nav__toggle--closed');
    toggleButton.classList.remove('main-nav__toggle--opened');
    mainNavList.classList.add('main-nav__list--closed');
    mainNavList.classList.remove('main-nav__list--opened');
  }
});

