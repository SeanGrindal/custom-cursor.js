export function clicking(cursor) {
   cursor.element.classList.add('cursor--clicking')

   const mouseup = () => {
      cursor.element.classList.remove('cursor--clicking')
   
      document.removeEventListener('mouseup', mouseup)
   }

   document.addEventListener('mouseup', mouseup, { once: true })
}
