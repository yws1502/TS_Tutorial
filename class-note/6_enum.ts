enum Shoes {
  Nike,
  Adidas,
}
let myShoes = Shoes.Nike;
console.log(myShoes); //0

enum Shoes1 {
  Nike = "나이키",
  Adidas = "아디다스",
}
let myShoes1 = Shoes1.Nike;
console.log(myShoes); // 나이키

// enum 활용 사례
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}

// enum에서 정의한 값만 가능
// 주로 drop down와 같은 목록이 필요한 코드에서 사용하면 good(+ 예외 처리가 필요한 경우 또한)
askQuestion(Answer.Yes);
// askQuestion("Yes");
// askQuestion("Y");
// askQuestion("yes");
// askQuestion("예스");
// askQuestion("y");
