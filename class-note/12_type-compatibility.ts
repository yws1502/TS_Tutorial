// interface
interface Developer1 {
  name: string;
  skill: string;
}
interface Person1 {
  name: string;
  skill: string;
}

class Person12 {
  name: string;
  skill: string;
}

var developer: Developer1;
var person2: Person1;
developer = new Person12();
// person = developer;

// function
var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};
sum = add;
// add = sum;

// generic
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2; // error -> Type 'NotEmpty<number>' is not assignable to type 'NotEmpty<string>'. Type 'number' is not assignable to type 'string'.
notEmpty2 = notEmpty1; // error -> Type 'NotEmpty<string>' is not assignable to type 'NotEmpty<number>'. Type 'string' is not assignable to type 'number'.
