
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

    document.addEventListener('mousedown', cursor.clicking)

    const render = () => {
      if (!cursor.disabled) {
        cursor.setPosition(cursor.position.X, cursor.position.Y)
      }

      requestAnimationFrame(render)
    }

    render()

    cursor.focusController = new Focus(cursor).addFocusElements(cursor.options.focusElements)
    cursor.initialized = true
  }
}
