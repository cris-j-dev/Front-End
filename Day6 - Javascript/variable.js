
// 1. Use strict
// JavaScript is very flexible
// flexible === dangerous
// use this for Valina Javascript.
// added ECMAScript 5
'use strict';


// 2. Variable
// let (added in ES6)
{
  let name = 'chan';
  console.log(name);
  name = 'hello'
  console.log(name);
}

console.log(name);
console.log(name);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 선언한 위치에 상관없이 최상위로 끌어올림.
// has no block scope
{
  var age = 4;
  console.log(age);
}
console.log(age);


// 3. const
// 한번 선언하고 값을 할당하면 변경이 안된다.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number -special numeric values: infinity, -infinity, Nan
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// binInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //
console.log(`value: ${bigInt}, type: ${typeof bigInt})`);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: '+ helloBob + ' type: ' + typeof helloBob);


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2)
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));


// object, real-life object, data structure
const chan = {name : 'chan', age: 30};
console.log(`value: ${chan.age}, type: ${typeof chan}`);
chan.age=33
console.log(`value: ${chan.age}, type: ${typeof chan}`);