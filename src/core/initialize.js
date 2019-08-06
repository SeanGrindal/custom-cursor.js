import { isMobileUserAgent } from '../util/isMobileUserAgent'

import { TweenMax, Power3 } from 'gsap/TweenMax'

export function initialize(cursor) {
  if (!isMobileUserAgent()) {
    cursor.active = true
    cursor.element.classList.add('cursor--initialized')

    document.addEventListener('mousemove', cursor.track)

    document.addEventListener('mouseleave', cursor.leave)

    document.addEventListener('mouseenter', cursor.enter)
  }
}
