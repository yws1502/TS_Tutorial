function logMessage(value: string) {
  console.log(value);
}

logMessage("hello");
// logMessage(100);

// 위와 같은 타입 선언은 하나의 특정 type만을 취급한다. 두개 이상의 type을 취급하고 싶은 경우 union 연산자를 사용한다.

let jaesuck: string | number | boolean;
function logMessage1(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage1("hello");
logMessage1(100);

interface Developer1 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

// 유니온 타입
function askSomeone(someone: Developer1 | Person2) {
  // 보장된 type에 대해서만 추론을 제공한다.
  someone.name;
  // someone.age;
  // someone.skill;
}
askSomeone({ name: "Developer", skill: "웹 개발" });
askSomeone({ name: "캡틴", age: 100 });

// 인터섹션 타입
function askSomeone1(someone: Developer1 & Person2) {
  someone.name;
  someone.age;
  someone.skill;
}
askSomeone1({ name: "Developer", skill: "웹 개발", age: 100 });

let woosang: string | number | boolean;
let noosang: string & number & boolean;

// 유니온 타입과 인터섹션 타입의 차이점
