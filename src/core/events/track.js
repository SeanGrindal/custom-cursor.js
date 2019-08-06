export function track(e, cursor) {
  if (cursor.animateTime) {
    TweenMax.to(cursor.element, cursor.animateTime, {
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
