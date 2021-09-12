/*
import getType from './getType'
import random from './getRandom'

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

*/

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
