# Random Color Generator

- Generates and returns random color hex code.

```sh
npm i hex-gen
```

### Basic usage
```js
const { randomColor } = require('hex-gen') 

const myColor = randomColor()

console.log(myColor)
```

### With log
```js
const { randomColor } = require('hex-gen') 

randomColor(true)
//Automatically logs to console, default 'false'.
```



