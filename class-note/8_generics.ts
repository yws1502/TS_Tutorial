/*
제네릭 (Generics)

function logText<T>(text: T): T {
  return text;
}
*/

// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText("10");
// logText(true);

function logText<T>(text: T): T {
  console.log(Text);
  return text;
}
logText<string>("hi");

function logText1(text: string) {
  console.log(text);
  text.split("").reverse().join("");
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText("a");
logNumber(10);

// 위의 두가지 함수는 type차이?... 이거를 해결하자
function log<T>(value: T): T {
  console.log(value);

  return value;
}

const a = log<string>("a");
a.split(" ");

const b = log<number>(1);
b.toString();

// interface에 generic을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: "10", selected: true };

interface Dropdown1<T> {
  value: T;
  selected: boolean;
}

const obj2: Dropdown1<number> = { value: 10, selected: false };

// generic의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);

  return text;
}

logTextLength<string>(["hi", "bye"]);

// generic 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength1<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength1("a");
logTextLength1([12, 12, 211]);

// generic 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption<number>(10);
// getShoppingItemOption<name>("10");
getShoppingItemOption("name");
