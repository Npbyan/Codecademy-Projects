const kelvin = 0;
// the forecast today is 293 kelvin.

let celsius = kelvin - 273;
// the forecast says celsius is kelvin minus 273.

let fahrenheit = celsius * (9 / 5) + 32;
// the forecast says Fahrenheit = Celsius * (9/5) + 32

fahrenheit = Math.floor(fahrenheit);
// the forecast says fahrenheit = Math.floor(fahrenheit) which rounds the decimal to the nearest whole number. 

let newton = celsius * (33 / 100)

newton = Math.floor(newton);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

console.log(`The temperature is ${newton} degrees Newton.`)
