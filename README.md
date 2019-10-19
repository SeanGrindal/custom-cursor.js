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

## Notes
- The class 'cursor--off-screen' will be applied to the CustomCursor when the true cursor is outside the window

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

## Example Mockup
### HTML
``` html
<div class="custom-cursor">
  <div class="cursor">
    <span class="text">VIEW</span>
  </div>
</div>
```

### CSS
``` css
.cursor {
  align-items: center;
  background-color: black;
  box-sizing: border-box;
  border-radius: 50%;
  display: none;
  pointer-events: none;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: fixed;
  height: 40px;
  transition: width 120ms ease-out,
              height 120ms ease-out,
              transform 120ms ease-out;
  width: 40px;
  will-change: top, left;
  z-index: 1000;
}

.cursor.cursor--initialized {
  display: flex;
}

.cursor .text {
  color: white;
  font-size: .875rem;
  opacity: 0;
  transition: opacity .08s ease-out;
}

.cursor.cursor--off-screen {
  width: 0;
  height: 0;
}

.cursor.cursor--focused {
  width: 55px;
  height: 55px;
}

.cursor.cursor--focused .text{
  opacity: 1;
  transition: opacity .08s ease-out .04s;
}
```
