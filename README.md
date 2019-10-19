# cursor.js
Create a custom cursor with interactions in JavaScript

## Import  
``` js
import CustomCursor from 'custom-cursor.js'
```
Note: This package utilizes ES6 syntaxes that haven't been compiled. As such, the files must be built and compiled by users.


## Create
``` js
const options = {
  // Whether or not the true cursor should be hidden when the custom cursor is initialized
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

// Update the cursor
customCursor.update(newOptions)
```
