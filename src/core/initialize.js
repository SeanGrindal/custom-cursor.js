import { isMobileUserAgent } from '../util/isMobileUserAgent'

import Focus from './focus'

export function initialize(cursor) {
  if (!isMobileUserAgent()) {
    cursor.element.classList.add('cursor--initialized')

    if (cursor.options.hideTrueCursor) {
      cursor.styleTag = document.createElement('style')
      cursor.styleTag.innerHTML = `
        * {
          cursor: none;
        }
      `

      document.head.appendChild(cursor.styleTag)
    }

    document.addEventListener('mousemove', cursor.track)

    document.addEventListener('mouseleave', cursor.leave)

    document.addEventListener('mouseenter', cursor.enter)

    const render = () => {
      if (!cursor.disabled) {
        const top = cursor.position.Y - cursor.element.clientHeight / 2
        const left = cursor.position.X - cursor.element.clientWidth / 2
  
        cursor.element.style.transform = `matrix(1, 0, 0, 1, ${left}, ${top})`
      }

      requestAnimationFrame(render)
    }

    render()

    cursor.focusObj = new Focus(cursor).initialize()
    cursor.initialized = true
  }
}
