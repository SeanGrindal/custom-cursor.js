// UTILITY FUNCTIONS
import { warn } from './util/log'

// CORE FUNCTIONS
import { destroy } from './core/destroy'
import { initialize } from './core/initialize'

// EVENTS
import { enter } from './core/events/enter'
import { leave } from './core/events/leave'
import { track } from './core/events/track'

export default class CustomCursor {
  constructor(element, options = {}) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    if (!element || !element.nodeName) {
      throw new Error('No element is specified to initialize customCursor')
    }

    this.element = element
    this.initialized = false
    this.disabled = false
    this.animateTime = options.animateTime || 0
    this.interactionClasses = {
      focusClass: options.focusClass
    }

    this.enter = () => {
      enter(this)
    }

    this.leave = () => {
      leave(this)
    }

    this.track = (e) => {
      track(e, this)
    }
  }

  initialize() {
    initialize(this)

    return this
  }

  disable() {
    if (this.initialized) {
      this.disabled = true

      this.element.classList.add('cursor--disabled')
    } else warn('CustomCursor needs to be initialized before it can be disabled')

    return this
  }

  enable() {
    if (this.initialized) {
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
