// DEFAULT SETTINGS
import defaults from './defaults'

// UTILITY FUNCTIONS
import { warn } from './util/log'
import { areOptionsEqual } from './util/object'

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

  update(newOptions) {
    if (!newOptions) {
      warn('No new options are specified in update call')
      
      return
    }

    console.log(newOptions, this.options)

    if (!areOptionsEqual(newOptions, this.options)) {
      for (const [key, value] of Object.entries(newOptions)) {
        this.options[key] = value
      }

    } else warn('New options in update call are the same as the old options')

    this.destroy().initialize()

    return this
  }

  destroy() {
    destroy(this)

    return this
  }
}