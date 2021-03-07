// DEFAULT SETTINGS
import defaults from './defaults'

// UTILITY FUNCTIONS
import { warn } from './util/log'
import { areOptionsEqual } from './util/object'
import { isMobileUserAgent } from './util/isMobileUserAgent'

// CORE FUNCTIONS
import { destroy } from './core/destroy'
import { initialize } from './core/initialize'

// EVENTS
import { enter } from './core/events/enter'
import { leave } from './core/events/leave'
import { track } from './core/events/track'
import { clicking } from './core/events/clicking'

export default class CustomCursor {
  constructor(element, options = {}) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    if (!element || !element.nodeName) {
      throw new Error('No element is specified to initialize customCursor')
    }

    this.element = element

    this.focusObj = null

    this.styleTag = null

    this.initialized = false

    this.disabled = false

    this.position = {
      X: null,
      Y: null
    }

    this.options = {
      hideTrueCursor: options.hideTrueCursor || defaults.hideTrueCursor,

      focusElements: options.focusElements || defaults.focusElements,

      focusClass: options.focusClass || defaults.focusClass
    }

    this.isMobileUserAgent = isMobileUserAgent()

    this.enter = () => {
      enter(this)
    }

    this.leave = () => {
      leave(this)
    }

    this.track = (e) => {
      track(e, this)
    }

    this.clicking = (e) => {
      clicking(this)
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

  update(newOptions) {
    if (!newOptions) {
      warn('No new options are specified in update call')
      
      return
    }

    if (!areOptionsEqual(newOptions, this.options)) {
      for (const [key, value] of Object.entries(newOptions)) {
        this.options[key] = value
      }

    } else warn('New options in update call are the same as the old options')

    this.destroy().initialize()

    return this
  }

  hideTrueCursor() {
    if (!this.styleTag) {
      this.styleTag = document.createElement('style')
      this.styleTag.innerHTML = `
        * {
          cursor: none;
        }
      `
  
      document.head.appendChild(this.styleTag)
    }

    return this
  }

  unhideTrueCursor() {
    if (this.styleTag) {
      document.head.removeChild(this.styleTag)
      this.styleTag = null
    }

    return this
  }

  setPosition(x, y, reqAni = false) {
    const set = () => {
      if (typeof x == 'number' && typeof y == 'number') {
        this.element.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
      } 
    }

    if (reqAni) requestAnimationFrame(set)
    else set()

    return this
  }

  destroy() {
    destroy(this)

    return this
  }
}