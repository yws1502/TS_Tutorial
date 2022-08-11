// 타입 단언(type assertion)
var a1;
a1 = 20;
a1 = 'a';
var b = a1 as string;
/*
타입 단언이란 typescript보다 개발자가 타입을 더 잘알고 있다.
그래서 내가 정의한 타입으로 간주를 해라~ 라는 것이 타입 단언이다.
*/

// DOM API 조작 시 가장 많이 사용된다.
var div = document.querySelector('div');
