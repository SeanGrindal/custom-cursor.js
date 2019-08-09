export default class Focus {
  constructor(cursor) {
    this.cursor = cursor

    this.initializedElements = []

    this.elementEnter = () => {
      this.cursor.element.classList.add(this.cursor.options.focusClass)
    }

    this.elementLeave = () => {
      this.cursor.element.classList.remove(this.cursor.options.focusClass)
    }
  }

  initialize() {
    this.cursor.options.focusElements.forEach(element => {
      if (typeof element === 'string') element = document.querySelector(element)
      if (!element || !element.nodeName) return

      element.addEventListener('mouseenter', this.elementEnter)
      element.addEventListener('mouseleave', this.elementLeave)

      this.initializedElements.push(element)
    })

    return this
  }

  destroy() {
    this.initializedElements.forEach(initializedElement => {
      initializedElement.removeEventListener('mouseenter', this.elementEnter)
      initializedElement.removeEventListener('mouseleave', this.elementLeave)
    })

    this.cursor.element.classList.remove(this.cursor.options.focusClass)

    return null
  }
}
