const numbers = [1, 2, 3, 4]

numbers[0] // 1
numbers[-1] // undefined
numbers.length // 4

numbers.reverse() // [4,3,2,1]
numbers //[4,3,2,1]

numbers.reverse() //[1,2,3,4]
numbers // [1,2,3,4]


// 배열에 아이템 추가하기
numbers.push(5) // 아이템을 추가하고나서의 배열의 길이를 반환한다.

// 가장 마지막 요소 삭제
numbers.pop()
numbers

// 가장 앞에 요소 추가
numbers.unshift('a')

// 첫번째 요소 제거 후 반환
numbers.shift()

// includes - 특정 아이템이 배열에 있는지 확인
numbers.includes(0) // false
numbers.includes(3) // true


// indexOf - 특정 아이템의 index 를 찾아서 반환
numbers.push('a')
numbers.push('a')

numbers.indexOf('a') 
numbers.indexOf('b') // -1 일치하는 값이 없다면 -1반환

// join - 배열에있는 문자열을 합쳐서 반환
numbers.join('') //'' 사이에 넣을것. 원본은 그대로 있음.

// Object

const name = 'jsaon'

const me = {
  name, // 변수의 이름과 key의 이름이 같다면 name: name, => name, 으로 생략가능.
  'phone number': '010-1234-5678',
  appleProducts:{
    macbook: '2018pro',
    iphone: '7',
  }
}

me["phone number"]
// JSON

const jsonData = JSON.stringify(me)
const parseDate = JSON.parse(jsonData) // 역직렬화