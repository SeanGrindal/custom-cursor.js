export function destroy(cursor) {
  if (cursor.active) {
    cursor.element.classList.remove('cursor--initialized')

    document.removeEventListener('mousemove', cursor.track)

    document.removeEventListener('mouseleave', cursor.leave)

    document.removeEventListener('mouseenter', cursor.enter)

    cursor.active = false
  }
}
