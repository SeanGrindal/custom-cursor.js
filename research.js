function mouseY(e) {
  if(!e) e = window.event

  if (e.pageY) return e.pageY
  else if (e.clientY) return e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)
  else return 0
}
