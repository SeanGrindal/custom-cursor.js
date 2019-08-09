# cursor.js
Create a custom cursor with interactions in JavaScript

## This is still in development!!
In fact, there is no entry point at the moment.
But your welcome to build the files yourself and play around with it.

## Create
``` js
const options = {
  // Time (in seconds) that the custom cursor takes to catch up to the true cursor after a mousemove
  animateTime: .72,

  // Wether or not the true cursor should be hidden when the custom cursor is initialized
  hideTrueCursor: false,

  // Array of DOM elements/selector strings that apply the focus class on hover
  focusElements: ['a', 'button'],

  // Class applied when the true cursor is hovering over a focusElement
  focusClass: 'cursor--focused'
}

// Can be selector string or DOM node
const element = '.cursor'

const customCursor = new customCursor(element, options)
```

## Methods
``` js
// Initialize the cursor
customCursor.initialize()

// Disable cursor
customCursor.disable()

// Enable cursor if it has been disabled
customCursor.enable()

// Destroy the cursor
customCursor.destroy()
```
