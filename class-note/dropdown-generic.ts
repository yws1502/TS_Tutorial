interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "google.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T extends { toString: Function }>(
  item: DropdownItem<T>
): HTMLOptionElement {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.textContent = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭다운 아이템 추가
emails.forEach((email: DropdownItem<string>) => {
  const item = createDropdownItem<string>(email);

  const selectTag = document.querySelector("#email-dropdown");
  selectTag?.appendChild(item);
});

numberOfProducts.forEach((product: DropdownItem<number>) => {
  const item = createDropdownItem<number>(product);
});
