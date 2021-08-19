export default class Focus {
  constructor(cursor) {
    this.cursor = cursor

    this.initializedElements = []
    this.focusClasses = []

    this.elementEnter = (focusClass, customEnterFunc) => {
      const func = () => {
        if (focusClass) {
          this.cursor.element.classList.add(focusClass)
        }

        if (typeof customEnterFunc == 'function') customEnterFunc()
      }
      
      return func
    }

    this.elementLeave = (focusClass, customLeaveFunc) => {
      const func = () => {
        if (focusClass) {
          this.cursor.element.classList.remove(focusClass)
        }

        if (typeof customLeaveFunc == 'function') customLeaveFunc()
      }
      
      return func
    }
  }

  addFocusElements(focusOpts) {
    focusOpts.forEach(selector => {
      if (typeof selector == 'string' || typeof selector == 'object') {
        const elInfo = selector.hasOwnProperty('elements') ? selector.elements : selector
        const focusClass = selector.hasOwnProperty('focusClass') ? selector.focusClass : this.cursor.options.focusClass
        const customEnterFunc = selector.hasOwnProperty('mouseenter') ? selector.mouseenter : null
        const customLeaveFunc = selector.hasOwnProperty('mouseleave') ? selector.mouseleave : null

        let elements = []

        if (typeof elInfo == 'string') {
          elements = document.querySelectorAll(elInfo)
        } else {
          elements = elInfo
        }
 
        const enterFunc = this.elementEnter(focusClass, customEnterFunc)
        const leaveFunc = this.elementLeave(focusClass, customLeaveFunc)

        if (!this.focusClasses.includes(focusClass)) {
          this.focusClasses.push(focusClass)
        }

        for (const el of elements) {
          if (this.initializedElements.map(item => item.el).includes(el)) continue

          el.addEventListener('mouseenter', enterFunc)
          el.addEventListener('mouseleave', leaveFunc)
    
          this.initializedElements.push({ el, enterFunc, leaveFunc  })
        }
      }
    })

    return this
  }

  removeFocusElements(elements) {
    elements.forEach((el) => {
      const ref = this.initializedElements.find(item => item.el == el)

      if (ref) {
        el.removeEventListener('mouseenter', ref.enterFunc)
        el.removeEventListener('mouseleave', ref.leaveFunc)
      }
    })

    if (elements.length) {
      this.initializedElements = this.initializedElements.filter((obj) => ![...elements].includes(obj.el))
    }
  }

  destroy() {
    this.initializedElements.forEach(initializedElement => {
      initializedElement.el.removeEventListener('mouseenter', initializedElement.enterFunc)
      initializedElement.el.removeEventListener('mouseleave', initializedElement.leaveFunc)
    })

    this.initializedElements = []

    for (const string of this.focusClasses) {
      this.cursor.element.classList.remove(string)
    }

    return null
  }
}
