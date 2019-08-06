function mouseY(evt) {
  if(!evt) evt = window.event

  if (evt.pageY) return evt.pageY
  else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)
  else return 0
}

function follow(evt) {
  TweenMax.to($pointer, .7, {
    left: ( parseInt( mouseX(evt) ) ) + 'px',
    top: ( parseInt( mouseY(evt) ) ) + 'px',
    ease: Power3.easeOut
  })
}
