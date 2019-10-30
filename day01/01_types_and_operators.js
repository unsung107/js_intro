// Types and Operators (타입과 연산자)
// Primitive Type

// Numbers
const a = 13
const b = -5
const c = 3.14 // float
const d = 2.998e16
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number

console.log(a, b, c, d, e, f, g)
console.log(5 / '안녕하세요') // NaN

// Strings 

const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"
const sentence3 = `Ask and go to the blue`

// 따옴표를 사용하면 줄바꿈이 안됨
// 대신 escape sequence 사용 가능

// const word = '안녕
// 하세요'

const word = '안녕\n하세요'


// Template Literal
const age = 10
const message = `홍길동의 나이는 ${age}`
console.log(message)

console.log('Happy' + 'Hacking')


// Boolean
true 
false

// Empty Value
// 값이 존재하지 않음을 표현하는 값
undefined
null

let firstName // 선언하고 할당하지 않음. => undefined

let lastName = null // 의도적으로 값이 없음을 표시할 때

let x = 0

x += 10
x -= 3
x *= 3

x++
x--

// 비교 연산자

3 > 2 // true
3 < 2 // false

// 문자열 비교도 가능
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순

'A' < 'B' // true
'A' < 'a' // flase
'가' < '나' // true

// 동등 연산자 (==)
// 서로 같은 값을 갖도록 변환할 수 있으면 같다고 판단한다.
// (JS 엔진이 자동으로 형변환) => 동등 연산자의 사용은 지양한다.

const a1 = 1
const b1 = '1'

a1 == b1 // true

a1 === b1 // false

// 논리 연산자
// and, or, not

true && true // true
true && false // false

true || true // true
false || true // true

!true // false
!false // true

// 삼항연산자
// 가장 앞의 boolean 값이 참이면 : 앞의값이 반환, 그렇지 않다면 : 뒤의값이 반환
let flag =  true

let temp = flag ? '참이니' : '거짓이니'
console.log(temp)
