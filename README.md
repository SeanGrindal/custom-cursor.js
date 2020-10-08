# custom-cursor.js
Create a custom cursor in JavaScript: 
<a href="https://seangrindal.github.io/custom-cursor-example/" target="_blank">Example</a>
- Only enabled on mouse-driven devices
- Add various interaction animation
- API interface providing basic functions 
- Dependency Free

## Import  
``` js
const CustomCursor = require('custom-cursor.js').default
```

## Create
``` js
// Following options represent the defaults
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

## Methods
``` js
// Initializes the cursor to begin following the mouse by attaching listeners and starting an animation loop
customCursor.initialize()

// Disable cursor from following the mouse without removing listeners 
customCursor.disable()

// Enable cursor to follow mouse again if it has been disabled
customCursor.enable()

// Destroy the cursor removing all event listeners
customCursor.destroy()

// Update the cursor with new options 
customCursor.update(newOptions)
```

## Core Markup
```html
<div class="cursor"></div>
```
```scss
.cursor {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: fixed;
  z-index: 1000;

  &.cursor--cursor--initialized {
    // if cursor initialized
  }

  &.cursor--off-screen {
    // if true cursor is outside of the window
  }

  &.cursor--disabled {
    // if cursor has been disabled
  }
}
```

# Example
<a href="https://seangrindal.github.io/custom-cursor-example/" target="_blank">View Following Example's Live Demo</a>
### HTML
``` html
<div class="cursor">
  <span class="text">VIEW</span>
</div>
```

### JS
``` js
const CustomCursor = require('custom-cursor.js').default 
new CustomCursor('.cursor').initialize()
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
  opacity: 0;
  position: fixed;
  height: 60px;
  transition: all 360ms cubic-bezier(.23,1,.32,1);
  width: 60px;
  will-change: transform;
  z-index: 1000;
}

.cursor.cursor--initialized {
  display: flex;
  opacity: 1;
}

.cursor .text {
  font-size: .875rem;
  opacity: 0;
  transition: opacity 80ms cubic-bezier(.23,1,.32,1);
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
