# RandomColor Generator

- Generates and returns random color hex code.

```sh
npm i random-color-gen
```

### Basic usage
```js
const { randomColor } = require('random-color-gen') 

const myColor = randomColor()

console.log(myColor)
```

### With log
```js
const { randomColor } = require('random-color-gen') 

randomColor(true)
//Automatically logs to console, default 'false'.
```



