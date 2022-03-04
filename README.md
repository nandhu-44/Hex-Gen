# Random Color Generator

- Generates and returns random color hex code.

```sh
npm i hex-color-gen
```

### Basic usage
```js
const { randomColor } = require('hex-color-gen') 

const myColor = randomColor()

console.log(myColor)
```

### With log
```js
const { randomColor } = require('hex-color-gen') 

randomColor(true)
//Automatically logs to console, default 'false'.
```



