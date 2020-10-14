# custom-cursor.js
### Create a custom cursor in JavaScript: <a href="https://seangrindal.github.io/custom-cursor-example/" target="_blank">Example</a>
- Only enabled on mouse-driven devices
- Add various interaction animation
- API interface providing basic functions 
- Lightweight, dependency free

## Import  
``` js
const CustomCursor = require('custom-cursor.js').default
```

## Simple Creation
``` js
// Following options represent the defaults
const options = {
  // Whether or not the true cursor should be hidden when the custom cursor is initialized
  hideTrueCursor: false,

  // Array of DOM elements/selector strings that add interactions on hover
  focusElements: ['a', 'button'],

  // Class applied when the true cursor is hovering over a focusElement
  focusClass: 'cursor--focused'
} 

// Can be selector string or DOM node
const element = '.cursor'

const customCursor = new CustomCursor(element, options)
```

## Advanced Interactions
Focus elements can be given unique interactions.
``` js
const options = {
  focusElements: [{
    selector: 'a#special-focus',
    focusClass: 'cursor--special-focused', 
    mouseenter: () => {
      // Run in addition to adding the focusClass
      console.log('Hi!! I entered <a id="#special-focus">')
    },
    mouseleave: () => {
      // Run in addition to removing the focusClass
      console.log(`Cya!! I'm leaving <a id="#special-focus">`)
    }
  }, 'button', 'a'],
  
  focusClass: 'cursor--focused'
}

const customCursor = new CustomCursor('.cursor', options)
```
If a focus class is given for a specific selector it will override the default. In the above example 'cursor--special-focused' is applied to ```<a id="special-focus">``` on hover, and 'cursor--focused' is applied on hover to buttons and other links.

Note that listeners will only be attached to an element the first time it's found in the DOM when looping over the selectors. As such, the more specific an interaction, the earlier it should be specified in the array.

## Core Methods
``` js
// Initializes the cursor to begin following the mouse by attaching listeners and starting an animation loop
customCursor.initialize()

// Disable cursor from following the mouse without removing any listeners  
customCursor.disable()

// Enable cursor to follow mouse again if it has been disabled
customCursor.enable()

// Destroy the cursor removing all event listeners and stopping the animation loop
customCursor.destroy()

// Update the cursor with new options 
customCursor.update(newOptions)

// Hide true cursor (if it isn't already)
customCursor.hideTrueCursor()

// Unhide true cursor (if it's hidden)
customCursor.unhideTrueCursor()

// x and y being a pixel position inside the viewport
customCursor.setPosition(x, y, requestAnimationFrame = false)
/* Note that if the custom cursor is still enabled it's position will be updated on the next animationFrame. Thus, this method is most useful when the cursor is disabled. */
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

  &.cursor--initialized {
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
## Use Case Examples 
### Run code if mobile and cursor isn't initialized
```js
const customCursor = new CustomCursor('.cursor').initialize()

if (customCursor.isMobileUserAgent) {
  // foo()
}
```

### Unhide hidden true cursor when disabling 
```js
const customCursor = new CustomCursor('.cursor', { 
  hideTrueCursor: true
}).initialize()

// When disabling 
customCursor.disable().unhideTrueCursor()

// Then re-enable 
customCursor.enable().hideTrueCursor()
```

### Set starting point for the cursor 
```js
new CustomCursor('.cursor').setPosition(x, y).initialize()
```

# Full Example
<a href="https://seangrindal.github.io/custom-cursor-example/" target="_blank">View Following Example's Live Demo</a>
``` html
<div class="cursor">
  <div class="cursor-border">
    <span class="text">VIEW</span>
  </div>
</div>
```

``` js
const CustomCursor = require('custom-cursor.js').default 
new CustomCursor('.cursor', {
  hideTrueCursor: true,
  focusElements: [{
    selector: '.photo-link',
    focusClass: 'cursor--focused-view'
  }, 'a']
}).setPosition(-30, -30).initialize()
```

``` css
.cursor {
  color: #ff5050;
  display: none;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: fixed;
  will-change: transform;
  z-index: 1000;
}

.cursor-border {
  position: absolute;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid #ff5050;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 60px;
  width: 60px;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  transition: all 360ms cubic-bezier(.23,1,.32,1);
}

.cursor.cursor--initialized {
  display: block;
}

.cursor .text {
  font-size: .875rem;
  opacity: 0;
  transition: opacity 80ms cubic-bezier(.23,1,.32,1);
}

.cursor.cursor--off-screen {
  opacity: 0;
}

.cursor.cursor--focused .cursor-border,
.cursor.cursor--focused-view .cursor-border {
  width: 90px;
  height: 90px;
}

.cursor.cursor--focused-view .text {
  opacity: 1;
  transition: opacity 360ms cubic-bezier(.23,1,.32,1);
}
```
