function add(num1, num2) {
  return num1 + num2
}
add(1, 2)

const sub = function(num1, num2){
  return num1 - num2
}

// Arrow function
// ES6+

let addOne = function(num) {
  return num + 1
}

addOne = (num) => {
  return num + 2
}

// 중괄호 제거는 바로 반환하겠다는 뜻
addOne = (num) => num + 1 // 리턴문 하나로 함수를 끝낼 수 있을때 사용 (lambda랑 비슷?)

console.log(addOne(2))


// name 이라는 인자를 받아서 hello ${name}을 반환하는 함수를
// 선언식, 표현식, arrow function 으로 만들어보세요

function test(name) {
  return `hello ${name}`
}
console.log(test('하하하'))

const test1 = function(name) {
  return `hello1 ${name}`
}
console.log(test1('하하하'))

test2 = name => `hello2 ${name}`
console.log(test2('히히히'))

test3 = name => {
  return `하하하3 ${name}`
}
console.log(test3('호호호'))


const makeObject = (value) => {
  return {'key': value}
}
console.log(makeObject('히히'))

// const makeObject2 = value => {'key': value} 오브젝트를 반환한다..안됨... {를 함수로 봄}
const makeObject2 = value => ({'key': value})

const noArgs = () => 'No args'
console.log(noArgs()) 


