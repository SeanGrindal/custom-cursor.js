export default class Focus {
  constructor(cursor) {
    this.cursor = cursor

    this.initializedElements = []

    this.elementEnter = () => {
      this.cursor.element.classList.add(this.cursor.focusClass)
    }

    this.elementLeave = () => {
      this.cursor.element.classList.remove(this.cursor.focusClass)
    }
  }

  initialize() {
    this.cursor.focusElements.forEach(element => {
      if (typeof element === 'string') element = document.querySelector(element)
      if (!element || !element.nodeName) return

      element.addEventListener('mouseenter', this.elementEnter)
      element.addEventListener('mouseleave', this.elementLeave)

      this.initializedElements.push(element)
    })

    return this
  }

  destroy() {
    console.log(this.initializedElements)
    this.initializedElements.forEach(initializedElement => {
      initializedElement.removeEventListener('mouseenter', this.elementEnter)
      initializedElement.removeEventListener('mouseleave', this.elementLeave)
    })

    this.cursor.element.classList.remove(this.cursor.focusClass)

    return null
  }
}
