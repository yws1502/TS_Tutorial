let todoItems: todoType[];

interface todoType {
  id: number;
  title: string;
  done: boolean;
}

// api
function fetchTodoItems(): todoType[] {
  const todos: todoType[] = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): todoType[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: todoType): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: todoType): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): todoType {
  return todoItems[0];
}

function showCompleted(): todoType[] {
  return todoItems.filter((item: todoType) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  addTodo({
    id: 123,
    title: "test",
    done: true,
  });
  addTodo({
    id: 125,
    title: "asdest",
    done: false,
  });
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
