export function destroy(cursor) {
  if (cursor.active) {
    cursor.element.classList.remove('cursor--initialized')
    
    document.removeEventListener('mousemove', mouseMove)

    document.removeEventListener('mouseleave', mouseLeave)

    document.removeEventListener('mouseenter', mouseEnter)

    cursor.active = false
  }
}
