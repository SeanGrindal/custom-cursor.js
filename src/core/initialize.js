import { isMobileUserAgent } from '../util/isMobileUserAgent'

export function initialize(cursor) {
  cursor.active = true
  cursor.element.classList.add('cursor--initialized')

  if (!isMobileUserAgent()) {
    document.addEventListener('mousemove', mouseMove)

    document.addEventListener('mouseleave', mouseLeave)

    document.addEventListener('mouseenter', mouseEnter)
  }

  function mouseMove(e) {
   cursor.element.style.left = `${e.clientX}px`
   cursor.element.style.top = `${e.clientY}px`
  }

  function mouseLeave(e) {
    cursor.element.classList.add('cursor--off-screen')
  }

  function mouseEnter(e) {
    cursor.element.classList.remove('cursor--off-screen')
  }
}
