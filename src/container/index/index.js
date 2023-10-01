class Slider {
  // це те що є в контенті
  static #content = null

  // buttons
  static #left = null
  static #right = null

  // це поточна картинка яка показується в слайдері
  static #count = 1
  // це число максимальної кількості картинок(4картинки)
  static #max = null

  // підключаємо всі потрібні елементи
  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )
    // зф рахунок цьго ми знаємо скільки в нас є картинок
    this.#max = this.#content.childElementCount

    // функції які перевертають слайди
    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth
    const scrollLeft = this.#content.scrollLeft
    const scrollWidth = this.#content.scrollWidth

    let scroll = 0

    if (side === 'left') {
      if (this.#count === 1 || scrollLeft === 0) {
        this.#count = this.#max
        scroll = (this.#count - 1) * offsetWidth
      } else {
        this.#count -= 1
        scroll = (this.#count - 1) * offsetWidth
      }
    } else if (side === 'right') {
      if (
        this.#count === this.#max ||
        scrollLeft === scrollWidth - offsetWidth
      ) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    // if (side === 'left') {
    //   if (this.#count === 1) {
    //     this.#count = this.#max
    //     scroll = (this.#count - 1) * offsetWidth
    //   } else {
    //     this.#count -= 1
    //     scroll = (this.#count - 1) * offsetWidth
    //   }
    // }

    // if (side === 'right') {
    //   if (this.#count === this.#max) {
    //     this.#count = 1
    //     scroll = 0
    //   } else {
    //     this.#count += 1
    //     scroll = (this.#count - 1) * offsetWidth
    //   }
    // }

    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}
Slider.init()

class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static #isOpen = false

  static init() {
    // робимо змінну для висоті розкритого меню
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight
    // Робимо змінну для меню розкладувального
    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )
    this.#button = document.querySelector('.header__button')

    this.#button.onclick = this.#toggle
  }

  // робимо метод заміни розкритого меню на закрите і навпаки
  static #toggle = () => {
    // перевіряємо чи відкрите вікно
    if (this.#isOpen) {
      this.#button.classList.replace(
        'header__button--close',
        'header__button--open',
      )
      // якщо хочу закрити вікно то просто ставлю 0
      this.#wrapper.style.height = 0
    } else {
      this.#button.classList.replace(
        'header__button--open',
        'header__button--close',
      )
      // якщо хочу відкрити вікно то ставлю йому розмір з scss
      this.#wrapper.style.height = `${this.#height}px`
    }

    this.#isOpen = !this.#isOpen
  }
}

Header.init()
