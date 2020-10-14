
import Focus from './focus'

export function initialize(cursor) {
  if (!cursor.isMobileUserAgent) {
    cursor.element.classList.add('cursor--initialized')

    if (cursor.options.hideTrueCursor) {
      cursor.hideTrueCursor()
    }
    
    document.addEventListener('mousemove', cursor.track)

    document.addEventListener('mouseleave', cursor.leave)

    document.addEventListener('mouseenter', cursor.enter)

    const render = () => {
      if (!cursor.disabled) {
        cursor.setPosition(cursor.position.X, cursor.position.Y)
      }

      requestAnimationFrame(render)
    }

    render()

    cursor.focusObj = new Focus(cursor).initialize()
    cursor.initialized = true
  }
}
