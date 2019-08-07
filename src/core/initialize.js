import { isMobileUserAgent } from '../util/isMobileUserAgent'

import Focus from './focus'

export function initialize(cursor) {
  if (!isMobileUserAgent()) {
    cursor.element.classList.add('cursor--initialized')

    document.addEventListener('mousemove', cursor.track)

    document.addEventListener('mouseleave', cursor.leave)

    document.addEventListener('mouseenter', cursor.enter)

    cursor.focusObj = new Focus(cursor).initialize()
    cursor.initialized = true
  }
}
