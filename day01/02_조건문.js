// const username = prompt('안녕하세요? 당신은 누구세요?')

// let message = ''

// if (username === 'ssafy') {
//   message = '<h1>안녕하세요, </h1>'
// } else if (username === 'admin'){
//   message = '<h1>주인님안녕하세요</h1'
// } else {
//   message = `<h1>Welcome ${username}</h1>`
// }

// document.write(message)


// switch 문
/*
const username = prompt('Who are you?')

let message = ''

switch(username) {

  case 'ssafy': {
    message = '<h1>안녕하세요, </h1>'
    break
  }
  case 'admin': {
    message = '<h1>주인님안녕하세요</h1>'
    break
  }
  default: {
    message = `<h1>Welcome ${username}</h1>`
  }
}
document.write(message)
*/


/* 이런식으로 break 문 없이 사용할 수 있다
switch(사용자){
  case '관리자': {
    사용자.권한 += '관리자 페이지 접근'
  }
  case '일반사용자':{
    사용자.권한 += '쓰기'
  }
  default:{
    사용자.권한 += '읽기'
  }
}
*/