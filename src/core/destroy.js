export function destroy(cursor) {
  if (cursor.initialized) {
    cursor.element.classList.remove('cursor--initialized')
    cursor.element.classList.remove('cursor--disabled')
    cursor.element.classList.remove('cursor--off-screen')

    cursor.unhideTrueCursor()

    document.removeEventListener('mousemove', cursor.track)

    document.removeEventListener('mouseleave', cursor.leave)

    document.removeEventListener('mouseenter', cursor.enter)

    document.removeEventListener('mousedown', cursor.clicking)

    cursor.focusObj = cursor.focusObj.destroy()
    cursor.initialized = false
  }
}
