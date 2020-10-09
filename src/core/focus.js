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
    this.cursor.options.focusElements.forEach(selector => {
      if (typeof selector !== 'string') return 
      const elements = document.querySelectorAll(selector)

      for (const el of elements) {
        el.addEventListener('mouseenter', this.elementEnter)
        el.addEventListener('mouseleave', this.elementLeave)
  
        this.initializedElements.push(el)
      }
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
