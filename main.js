/*
import getType from './getType'
import random from './getRandom'
import _ from 'lodash'

console.log(typeof 'Hello world!') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object

console.log(getType(123)) // Number
console.log(getType(false)) // Boolean
console.log(getType(null)) // Null
console.log(getType({})) // Object
console.log(getType([])) // Array

// 산술 연산자 (arithmetic operator)
console.log(1 + 2) // 3
console.log(5 - 7) // -2
console.log(3 * 4) // 12
console.log(10 / 2) // 5
console.log(7 % 5) // 2

// 할당 연산자 (assignment operator)
let a = 2
// a = a + 1
a += 1
a -= 1
a *= 1
a /= 1
a %= 1
console.log(a)

// 비교 연산자 (comparison operator)
const a = 1
const b = 1

console.log(a === b) // 일치 연산자

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

console.log(a !== b) // 불일치 연산자
console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(a <= b)

// 논리 연산자 (logical operator)
const a = 1 === 1
const b = 'AB' === 'AB'
const c = true

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && b && c) // 그리고(and) 연산자
console.log('||: ', a || b || c) // 또는(or) 연산자
console.log('!: ', !a) // 부정(not) 연산자

// 삼항 연산자 (ternary operator)
const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')

// 조건문 1 (If statement)

const a = random()

if (a === 0) {
  console.log('a is zero')
} else if (a === 5) {
  console.log('a is five')
} else if (a === 7) {
  console.log('a is seven')
} else {
  console.log('rest...')
}

// 조건문 2 (Switch statement)
switch (a) {
  case 0:
    console.log('a is zero')
    break
  case 5:
    console.log('a is five')
    break
  case 7:
    console.log('a iss seven')
    break
  default:
    console.log('rest...')
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function() {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 변수 유효범위 (Variable Scope)
// var, let, const
// let, const - 블록 레벨의 유효범위를 가진다. - 앞으로 얘들만 쓰자!
// var - 함수 레벨의 유효범위를 가진다. (let, const와 비교했을 때 범위가 더 커져서 우리가 의도하지 않은 범위에서 변수가 사용될 수가 있음. 그만큼 메모리를 차지하고 있고 그것이 결국 개발자가 확인하지 못하는 메모리 누수로 발전할 수가 있음) - 권장되지 X

function scope() {
  if (true) {
    var a = 123
  }
  console.log(a)
}
scope()

// 형 변환 (Type conversion)

const a = 1
const b = '1'

console.log(a == b) // 동등 연산자(==)는 되도록이면 사용하지 말자. 형 변환이 일어나면서 값을 비교하게 되므로 의도치 않은 결과가 나올 수 있다. 일치 연산자(===)를 사용할 것!

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if ('0') {
  console.log(123)
}

// 함수 복습 (+추가 개념)
// 함수의 결과가 반복적으로 사용될 때는 변수에 담아서 사용하는 것이 좋고, 단일로만 사용될 때는 함수의 결과가 사용되는 곳에서 함수를 호출하는 것도 하나의 효과적인 사용 방법이다.
// 함수 안에서 return 키워드를 사용할 수 있는데, 이 키워드는 return 뒤의 값을 함수 밖으로 내보내기도 하지만, 이 부분에서 함수가 종료된다는 걸 선언하는 개념도 된다.
// 매개변수를 지정하지 않아도 arguments 객체라는 것을 내부에서 쓸 수 있도록 JavaScript가 만들어져 있기 때문에 충분히 활용할 수 있다. 함수가 받는 인수가 너무 많아서 매개변수의 이름을 일일이 지정하기가 힘들 때는 arguments라는 객체로 일괄적으로 관리해 줄 수 있지만, 직관적이지가 않기 때문에 되도록이면 매개변수를 지정해서 내가 받는 값이 어떤 의미인지 명시적으로 표시해 주는 것이 더 권장되기는 함~ (arguments 객체를 사용하는 방법은 그렇게 자주 쓰지는 않는다고..)

function sum() {
  console.log(arguments)
  return arguments[0] + arguments[2]
}

console.log(sum(7, 3, 5))


// 화살표 함수 (Arrow function)
// () => {}  vs  function () {}

const double = function(x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x) => x * 2
console.log('doubleArrow: ', doubleArrow(7))


// 즉시실행함수
// IIFE Immediately-Invoked Function Expression
// 이름이 없는 익명 함수를 만들자마자 그 자리에서 바로 실행할 수 있음
// 방법 1. (fn)()
// 방법 2. (fn()) - 강사님은 개인적으로 이 방법을 권장하신다고 함

const a = 7
function double() {
  console.log(a * 2)
}

double();

(function() {
  console.log(a * 2)
})();

(function() {
  console.log(a * 2)
}());

// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수 선언(O) / 함수 표현(X)

const a = 7

double()

function double() {
  console.log(a * 2)
}

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료
// 굉장히 자주 사용되니 잘 기억해 두자!

const timer1 = setTimeout(() => {
  console.log('heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer1)
})

const timer2 = setInterval(() => {
  console.log('heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer2)
})

// 콜백 (Callback)
// 함수의 인수로 사용되는 (또 다른) 함수
// 특정한 실행 위치를 보장해 주는 방법으로 콜백함수를 활용할 수 있다.

// setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('heropy!')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})

// ---------------- 클래스 (Class) ----------------
// const heropy = {
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   },
// }
// console.log(heropy.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   },
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   },
// }
// console.log(neo.getFullName())

function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// 'new'라는 키워드를 통해서 생성자 함수로 실행한 결과를 반환해서 할당된 그 변수를 (생성자 함수의) 인스턴스라고 부른다.
// heropy, amy, neo : 인스턴스
const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())


// this
// 일반(Normal) 함수는 '호출 위치'에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 '함수 범위'에서 this 정의!

// const heropy = {
//   name: 'heropy',
//   normal: function() {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   },
// }
// heropy.normal() // Heropy
// heropy.arrow() // undefined

/////////////////////////////////////////////////////
// const amy = {
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow,
// }
// amy.normal() // Amy
// amy.arrow() // undefined

/////////////////////////////////////////////////////
// function User(name) {
//   this.name = name
// }

// User.prototype.normal = function() {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const heropy = new User('Heropy')

// heropy.normal() // Heropy
// heropy.arrow() // undefined

/////////////////////////////////////////////////////
// setTimeout, setInterval 같은 타이머 함수는 콜백으로 일반 함수보다는 화살표 함수를 넣어주는 것이 활용도가 더 높다!

const timer = {
  name: 'Heropy!!',
  timeout: function() {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  },
}
timer.timeout() // Heropy!!

// 어떨 떄는 일반 함수가, 또 어떨 때는 화살표 함수가 효과적일 수 있다. 그것은 상황에 따라서 달라지기 때문에 둘을 잘 구분해서 사용하자!


// ES6 Classes

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())


// JS Class의 상속(확장)
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license // new logic
  }
}
const myCar = new Car('현대차', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(daughtersCar)


// JS 데이터
// JS 데이터를 다룰 수 있는 상세한 명령들에 대해서 Araboza!

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

// String
// MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

{
  // String.prototype.indexOf()
  const result = 'Hello world!'.indexOf('world')
  const result2 = 'Hello world!'.indexOf('Heropy')
  console.log(result) // 6
  console.log(result2) // -1 (일치하는 값 없음)

  const str = 'Hello world!'
  console.log(str.indexOf('HEROPY') !== -1) // false
}

{
  const str = '01 23'
  console.log(str.length) // 5 (공백도 하나의 문자열임)
}

{
  const str = 'Hello world!'
  console.log(str.slice(6, 11)) // world
}

{
  const str = 'Hello world!'
  console.log(str.replace('world', 'yeon')) // Hello yeon!
  console.log(str.replace(' world!', '')) // Hello - 이렇게 문자를 제거하는 데에도 활용 가능
}

{
  const str = 'thesecon@gmail.com'
  console.log(str.match(/.+(?=@)/)[0]) // thesecon
}

{
  const str = '     Hello world!   '
  console.log(str.trim()) // Hello world! (문자 앞뒤에 있던 공백들이 사라짐)
}

// Number
const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2)
console.log(str) // 3.14
console.log(typeof str) // string

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer) // 3
console.log(float) // 3.14
console.log(typeof integer, typeof float) // number number

{
  // - Math
  // - MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

  console.log('abs: ', Math.abs(-12)) // 12

  console.log('min: ', Math.min(2, 8)) // 2
  console.log('max: ', Math.max(2, 8)) // 8

  console.log('ceil: ', Math.ceil(3.14)) // 4
  console.log('floor: ', Math.floor(3.14)) // 3
  console.log('round: ', Math.round(3.14)) // 3
  // (* 기본적으로 JS는 정수 단위로 올림, 내림, 반올림 처리를 한다.)

  console.log('random: ', Math.random()) // 랜덤한 숫자를 반환 (ex. 0.38055767506777594)
}

// Array
// MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Terms : index, indexing, element(item)

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) // 2
console.log(fruits[2]) // Cherry

{
  // .length
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  console.log(numbers.length) // 4
  console.log(fruits.length) // 3
  console.log([1, 2].length) // 2

  console.log([].length) // 0 - 이런 식으로 배열 데이터의 내용이 채워져 있는지 그렇지 않은지를 확인하는 경우가 굉장히 많음
}

{
  // .concat()
  // ⭐ 원본 배열 데이터 수정되지 X
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  console.log(numbers.concat(fruits)) // [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']
  console.log(numbers) // [1, 2, 3, 4]
  console.log(fruits) // ['Apple', 'Banana', 'Cherry']
}

{
  // .forEach()
  // 배열 데이터의 item의 개수만큼 콜백함수를 반복적으로 실행
  // 따로 반환되는 값은 없음
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  fruits.forEach(function(fruit, i) {
    console.log(fruit, i)
  })
}

{
  // .map()
  // 배열 데이터의 item의 개수만큼 콜백함수를 반복적으로 실행
  // 콜백 내부에서 return 키워드를 통해 반환한 데이터를 새로운 배열로 만들어서 사용할 수 있다.
  // ⭐ 원본 배열 데이터 수정되지 X
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  const a = fruits.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`)
  })
  console.log(a) // undefined

  const b = fruits.map((fruit, index) => {
    return `${fruit}-${index}`
  })
  console.log(b) // ['Apple-0', 'Banana-1', 'Cherry-2']

  // 이런 방식으로 배열 데이터를 객체 데이터로 새롭게 만들어서 활용할 수 있다. (많이 사용되는 방식임)
  const c = fruits.map((fruit, index) => ({
    id: index,
    name: fruit,
  }))
  console.log(c)
}

{
  // .filter()
  // 배열 데이터 안에 들어있는 각각의 item들을 특정한 기준에 의해서 필터링을 함. 필터된 새로운 배열 데이터를 결과로 반환함
  // 콜백함수에서 반환된 값이 true인 경우에만 해당 item을 배열에 넣어줌
  // ⭐ 원본 배열 데이터 수정되지 X
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  const a = numbers.map((number) => number < 3)
  console.log(a) // [true, true, false, false]

  const b = numbers.filter((number) => number < 3)
  console.log(b) // [1, 2]

  console.log(numbers) // [1, 2, 3, 4]
}

{
  // .find()
  // 배열 데이터 안에서 조건에 맞는 특정한 item을 찾을 때 사용
  // 콜백 내에서 뭔가를 찾으면 반복이 종료되고 찾아진 배열의 item이 반환된다.
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  const a = fruits.find((fruit) => /^B/.test(fruit))
  console.log(a) // Banana

  // .findIndex()
  // 찾아진 item의 index 번호를 반환
  const b = fruits.findIndex((fruit) => /^B/.test(fruit))
  console.log(b) // 1
}

{
  // .includes()
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  const a = numbers.includes(3)
  console.log(a) // true

  const b = fruits.includes('HEROPY')
  console.log(b) // false
}

{
  // .push() .unshift()
  // ⭐ 원본 수정됨 주의!
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  numbers.push(5)
  console.log(numbers) // [1, 2, 3, 4, 5]

  numbers.unshift(0)
  console.log(numbers) // [0, 1, 2, 3, 4, 5]
}

{
  // .reverse()
  // ⭐ 원본 수정됨 주의!
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  numbers.reverse()
  fruits.reverse()

  console.log(numbers) // [4, 3, 2, 1]
  console.log(fruits) // ['Cherry', 'Banana', 'Apple']
}

{
  // .splice() - 2가지 기능
  // 1. 배열 데이터에서 특정한 item들을 *삭제할 때* 사용
  // (배열 데이터 안에서 특정한 index 번호를 가지고 몇 개의 item을 지울지 결정할 수 있다.)
  // 2. 세 번째 인수로 그 자리에 *끼워넣을* 새로운 item을 명시할 수 있다.
  // ⭐ 원본 수정됨 주의!
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  numbers.splice(2, 1)
  console.log(numbers) // [1, 2, 4]

  fruits.splice(1, 0, 'Apricot')
  console.log(fruits) // ['Apple', 'Apricot', 'Banana', 'Cherry']
  fruits.splice(2, 1, 'Blueberry')
  console.log(fruits) // ['Apple', 'Apricot', 'Blueberry', 'Cherry']
}

// Object
// MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods

const userAge = {
  // key: value
  name: 'Heropy',
  age: 85,
}

const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com',
}

{
  // userAge나 userEmail에는 assign 메소드를 사용할 수 없다. assign이라는 메소드는 Object라는 JS의 전역 객체 부분의 프로토타입으로 만들어져 있는 메소드가 아니기 때문에 실제 객체 데이터 자체에는 사용할 수가 없다.
  // assign 메소드는 Object라는 JS의 전역 객체에 직접적으로 사용하는 메소드이고 이것을 정적 메소드(static method)라고 함
  const target = Object.assign(userAge, userEmail)
  console.log(target) // {name: 'Heropy', age: 85, email: 'thesecon@gmail.com'}
  console.log(userAge) // {name: 'Heropy', age: 85, email: 'thesecon@gmail.com'}
  console.log(target === userAge) // true

  // if) userAge와 userEmail을 합쳐서 새로운 객체 데이터를 만들고 싶다면?
  // const target = Object.assign({}, userAge, userEmail)
  // 이렇게 하면 위의 경우와는 다르게 원본 데이터를 손상하지 않고 userAge와 userEmail의 속성들을 합쳐놓은 새로운 객체 데이터를 만들어서 Object.assign()이라는 정적 메소드에서 반환받아서 사용할 수 있다.

  // const target = Object.assign({}, userAge)
  // 특정한 객체 데이터(바로 위의 예시에서는 userAge)를 복사하는 용도로 사용할 수도 있다.

  const a = { k: 123 }
  const b = { k: 123 }
  console.log(a === b) // false - a와 b는 생긴 것은 똑같지만, 서로 다른 객체임!
}

{
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com',
  }

  const keys = Object.keys(user)
  console.log(keys) // ['name', 'age', 'email']

  // 객체 데이터에서 대괄호[]를 사용하는 indexing 방식을 통해 좀 더 동적으로 객체 데이터에 있는 내용들을 가져와서 활용할 수 있다.
  console.log(user['email']) // thesecon@gmail.com

  const values = keys.map((key) => user[key])
  console.log(values) // ['Heropy', 85, 'thesecon@gmail.com']
}

// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
// 필요한 것들만 꺼내서 쓸 수 있다.

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com',
}
const { name: heropy, age, email, address = 'korea' } = user
// =user.name  =user['name']  -> 이렇게 하는 것과 동일
// address = 'korea'  -> 구조 분해 할당에서 기본값을 지정해주는 방법! 아주 자주 사용되지는 않지만, 간혹 필요한 경우들이 있음
// 구조 분해 할당을 통해 특정한 객체에서 데이터를 꺼내올 때는 그 데이터의 이름을 정확하게 작성하되, 만약 활용할 때는 그 데이터의 이름과 다른 이름으로 활용하고 싶다면 name: heropy(원하는 변수의 이름) 이렇게 표기해 주면 됨

console.log(`사용자의 이름은 ${heropy}입니다.`) // 사용자의 이름은 Heropy입니다.
console.log(`${heropy}의 나이는 ${age}세입니다.`) // Heropy의 나이는 85세입니다.
console.log(`${heropy}의 이메일 주소는 ${email}입니다.`) // Heropy의 이메일 주소는 thesecon@gmail.com입니다.
console.log(address) // korea

// 배열 데이터는 객체 데이터와 다르게 이름으로 구조 분해해서 추출하는 것이 아니라, *순서대로* 추출되는 것임
const fruits = ['apple', 'banana', 'Cherry']
const [a, b, c, d] = fruits
// const [, b] = fruits
// -> 'banana'만 꺼내오고 싶다면, 'apple'은 활용하지 않을 거니까 a를 지워주면 됨. 그 대신 쉼표는 꼭 남겨둬야 함 (배열 데이터는 순서가 중요하기 때문에 명확히 해주기 위해서)
console.log(a, b, c, d) // apple banana Cherry undefined


// 전개 연산자 (Spread Operator)

// 1. 배열 데이터를 쉼표(,)로 구분해서 전개
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits) // ['Apple', 'Banana', 'Cherry']
console.log(...fruits) // Apple Banana Cherry
// = console.log('Apple', 'Banana', 'Cherry')

// 2. 매개변수에도 전개 연산자를 사용할 수 있다.
// 이 경우엔 c라는 매개변수가 나머지 모든 인수들을 다 받아내는 역할을 함 (배열의 형태로 순서대로 받아냄)
// ...c  ->  Rest parameter '나머지 매개변수'

const toObject = (a, b, ...c) => ({ a, b, c })
console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: ['Cherry', 'Orange']


// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function

// 원시 데이터들은 한 번 메모리에 만들어지면 새롭게 만들어지는 것이 아니고 항상 불변한다.
// 따라서, 원시 데이터에서 메모리 주소까지 따져가면서 복잡하게 이해할 필요는 (일단은) 없다. 그냥 생긴게 같으면 같은 데이터(true), 생긴 게 다르면 다른 데이터(false)라고 이해하면 됨
let a = 1
let b = 4
console.log(a, b, a === b) // 1 4 false
b = a
console.log(a, b, a === b) // 1 1 true
a = 7
console.log(a, b, a === b) // 7 1 false
let c = 1
console.log(b, c, b === c) // 1 1 true

// * 참조형 데이터들은 생긴게 똑같아도 서로 같은 데이터가 아닐 수도 있다. *
// 참조형 데이터는 원시형 데이터와 다르게 새로운 값을 만들 때마다 새로운 메모리 주소에 할당됨
// 참조형 데이터는 불변성이 없다 === 가변한다
let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b) // { k: 1 } { k: 1 } false
a.k = 7
b = a // 참조형 데이터를 관리할 때에는 할당 연산자를 쓰는 것이 의도치 않은 문제를 발생시킬 수 있기 때문에(한 곳만 수정했는데 다른 곳도 같이 수정되는..), 따로 의도한 것이 아니라면 일반적인 경우에는 '복사'라는 개념을 통해서 a와 b를 실제 메모리 상에서 분리해 줘야 한다.
console.log(a, b, a === b) // { k: 7 } { k: 7 } true
a.k = 2
console.log(a, b, a === b) // { k: 2 } { k: 2 } true
let c = b
console.log(a, b, c, a === c) // { k: 2 } { k: 2 } { k: 2 } true
a.k = 9
console.log(a, b, c, a === c) // { k: 9 } { k: 9 } { k: 9 } true


// 참조형 데이터를 복사하는 방법
// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com'],
}

// 얕은 복사
// 참조형 데이터 내부에 또다른 참조형 데이터가 없는 경우엔 손쉽게 얕은 복사를 사용하면 됨
// 방법 1. Object.assign
// const copyUser = Object.assign({}, user)

// 방법 2. Spread Operator
// const copyUser = {...user}

// 깊은 복사
// 참조형 데이터 내부에 또다른 참조형 데이터가 있는 경우에는 깊은 복사를 고려해봐야 함
// lodash 패키지의 cloneDeep의 도움을 받아서 개발하면 좋을 것 같다!
const copyUser = _.cloneDeep(user)

console.log(copyUser === user) // false

user.age = 22
console.log('user', user) // {name: 'Heropy', age: 22, emails: Array(1)}
console.log('copyUser', copyUser) // {name: 'Heropy', age: 85, emails: Array(1)}

console.log('------')
console.log('------')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails) // false
console.log('user', user)
console.log('copyUser', copyUser)

// copyUser는 건들지도 않았는데, user와 copyUser의 emails가 같아져 버림.
// why?) emails도 참조형 데이터(배열)이고, 따로 emails를 복사한 적은 없기 때문에 user와 copyUser의 emails는 여전히 같은 메모리 주소를 바라보고 있음
// 깊은 복사를 통해 참조형 데이터 내부로 들어가서 모든 데이터들을 전부 복사 처리해야함
// 깊은 복사는 JS로 직접적으로 구현하기엔 좀 복잡... lodash의 도움을 받아서 깊은 복사를 구현해보자!(위로 gogo)


// 가져오기, 내보내기 - import, export
import _ from 'lodash' // From `node_modules`!
import checkType from './getType' // getType.js
// import { random, user as heropy } from './getRandom' // getRandom.js
import * as R from './getRandom' // getRandom이라는 js 파일에서 모든 export 내용을 가져와서 내가 지정한 이름의 변수에 할당해서(여기서는 R) 내부적으로 활용하는 개념

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
// console.log(random(), random())
// console.log(heropy)
console.log(R)


// lodash 패키지 사용법
// lodash에서 제공하는 여러 가지 메소드들을 통해서 FE 개발을 할 때 여러 가지 데이터들을 처리하는 데에 많은 도움을 받을 수 있다.
import _ from 'lodash'

{
  // FE 개발을 하면서 여러 데이터들의 고유화 처리를 할 때, uniqBy, unionBy를 많이 사용하게 될 것임!
  const usersA = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' },
  ]
  const usersB = [
    { userId: '1', name: 'HEROPY' },
    { userId: '3', name: 'Amy' },
  ]
  const usersC = usersA.concat(usersB)
  console.log('concat: ', usersC)
  console.log('uniqBy: ', _.uniqBy(usersC, 'userId'))

  const usersD = _.unionBy(usersA, usersB, 'userId')
  console.log('unionBy: ', usersD)
}

{
  const users = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' },
    { userId: '3', name: 'Amy' },
    { userId: '4', name: 'Evan' },
    { userId: '5', name: 'Lewis' },
  ]

  const foundUser = _.find(users, { name: 'Amy' })
  const foundUserIndex = _.findIndex(users, { name: 'Amy' })
  console.log(foundUser)
  console.log(foundUserIndex)

  _.remove(users, { name: 'HEROPY' })
  console.log(users)
}


// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법
// 하나의 JSON이 곧 하나의 데이터
// JavaScript의 자료형 중에서 undefined를 제외한 나머지는 다 사용 가능함!
// .json 파일은 하나의 문자 데이터임

import myData from './myData.json'

// console.log(typeof myData)

const user = {
  name: 'HEROPY',
  age: 85,
  Emails: ['thesecon@gmail.com', 'neo@zillinks.com'],
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)

// Local Storage, Session Storage
// 사이트를 나갈 때 Storage의 데이터가 지워지게 해야 하는 경우가 아니라면, 일반적으로는 localStorage가 더 활용도가 높다.
const user = {
  name: 'HEROPY',
  age: 85,
  Emails: ['thesecon@gmail.com', 'neo@zillinks.com'],
}

// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

// localStorage의 내용을 수정할 때는 이렇게 하면 됨
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))

// -> 이런식으로 데이터를 다루는 방식이 좀 원시적이기 때문에 lodash 패키지의 기능을 활용해서 Local Storage를 하나의 DB처럼 쉽게 관리해 줄 수 있는 패키지가 있음(lowdb -> https://github.com/typicode/lowdb). 지금 당장은 아니더라도 나중에 활용해 보면 좋을 것 같습니당!


// OMDb API
// Query String: 주소?속성=값&속성=값&속성=값
// axios 패키지

import axios from 'axios'

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies()

// 처음에 JS를 공부할 때는 JS로 브라우저의 페이지에 결과물을 직접적으로 출력하려고 노력하지 말고 되도록이면 console창만 켜놓고 console창에서 데이터가 어떻게 처리되는지를 연습을 많이 하는 것이 중요하다! JS를 통해서 웹페이지에 출력하는 결과물들을 만들어 보는 것은 Vue나 React를 배울 때 좀 더 자세히 알아볼 것임. 지금까지 배운 JS의 데이터를 처리하는 여러 가지 방법들에 대해서 충분히 많이 복습하고 숙달된 만큼 Vue나 React가 훨씬 더 쉬워질 것임
*/
