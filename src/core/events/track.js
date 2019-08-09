import { TweenMax, Power3 } from 'gsap/TweenMax'

export function track(e, cursor) {
  if (cursor.options.animateTime) {
    TweenMax.to(cursor.element, cursor.options.animateTime, {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`,
      ease: Power3.easeOut
    })
  }
  else {
    cursor.element.style.left = `${e.clientX}px`
    cursor.element.style.top = `${e.clientY}px`
  }
}
