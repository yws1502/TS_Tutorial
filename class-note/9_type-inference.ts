// 타입 추론 기본 1
var a = 'asd';

function getB(b = 1) {
  var c = 'hi';
  return c + b;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: 'value',
  title: 'title',
};

// 타입 추론 기본 3
interface Dropdown1<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown1<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  value: 'test',
  title: 'title',
  description: 'description',
  tag: 'tag',
};

// Best Common Type
const arr = [1, 2, null];
