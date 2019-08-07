import { isMobileUserAgent } from '../util/isMobileUserAgent'

export function initialize(cursor) {
  if (!isMobileUserAgent()) {
    cursor.initialized = true
    cursor.element.classList.add('cursor--initialized')

    document.addEventListener('mousemove', cursor.track)

    document.addEventListener('mouseleave', cursor.leave)

    document.addEventListener('mouseenter', cursor.enter)
  }
}
