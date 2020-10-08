# cursor.js
Create a custom cursor with interactions in JavaScript

## Import  
``` js
const CustomCursor = require('custom-cursor.js').default
```


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

const customCursor = new CustomCursor(element, options)
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

## Example
[View This Example](https://seangrindal.github.io/custom-cursor-example/)
### HTML
``` html
<div class="cursor">
  <span class="text">VIEW</span>
</div>
```

### CSS
``` css
.cursor {
  align-items: center;
  border: 1px solid #ff5050;
  color: #ff5050;
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
  height: 60px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition: all 360ms cubic-bezier(.23,1,.32,1);
  width: 60px;
  will-change: transform;
  z-index: 1000;
}

.cursor.cursor--initialized {
  display: flex;
}

.cursor .text {
  font-size: .875rem;
  opacity: 0;
  transition: opacity .08s ease-out;
}

.cursor.cursor--off-screen {
  opacity: 0;
}

.cursor.cursor--focused {
  width: 90px;
  height: 90px;
}

.cursor.cursor--focused .text {
  opacity: 1;
  transition: opacity 360ms cubic-bezier(.23,1,.32,1);
}
```
