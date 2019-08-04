import { destroy } from './core/destroy'
import { initialize } from './core/initialize'
import { warn } from './util/log'

export default class CustomCursor {
  constructor(element, options = {}) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    if (!element || !element.nodeName) {
      throw new Error('No element is specified to initialize customCursor')
    }

    this.element = element
    this.disabled = false
    this.active = false
    this.interactionClasses = {
      focusClass: options.focusClass
    }
  }

  initialize() {
    initialize(this)

    return this
  }

  disable() {
    if (this.active) {
      this.disabled = true

      this.element.classList.add('cursor--disabled')
    } else warn('CustomCursor needs to be initialized before it can be disabled')

    return this
  }

  enable() {
    if (this.active) {
      this.disabled = false

      this.element.classList.remove('cursor--disabled')
    } else warn('CustomCursor needs to be initialized before it can be enabled')

    return this
  }

  destroy() {
    destroy(this)

    return this
  }
}
