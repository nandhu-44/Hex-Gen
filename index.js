const chalk = require('chalk');

module.exports = {
    randomColor(log=false)  {
    log = log ?? false;
     let range = "0123456789abcdef"
     let colorString = "#"
     for(let color=0;color<6;color++){
         colorString += range[Math.floor(Math.random() * range.length)]
     }
     if(log) console.log(`[ Hex-Gen ] : `+ chalk.hex(`${colorString}`)(`${colorString}`)) 
     return colorString
    }
}
