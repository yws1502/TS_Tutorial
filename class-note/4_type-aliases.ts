// interface Person1 {
//   name: string;
//   age: number;
// }

type Person1 = {
  name: string;
  age: number;
};

let seho1: Person1 = {
  name: "세호",
  age: 30,
};

type MyString = string;
let str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

/*
interface와 type aliases의 차리점

타입 별칭은 타입 값을 하나 생성하는 것이 아닌 정의한 타입을 나중에 쉽게 참고할 수 있게 이름을 부여한 것과 같다.
또한 타입 별칭은 확장이 되지 않는다(상속 안됨)

typeScript의 공식 문서에선 type보다는 interface로 선언하기를 권장

** 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙에 따라 가급적 확장 가능한 인터페이스로 선언하는 것이 좋다. **
*/
