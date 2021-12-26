const quotes = [
  {
    quote: "진리가 너희를 자유케 하리라.",
    author: "Jesus",
  },
  {
    quote: "실수해도 괜찮아, 지금으로 충분해.",
    author: "xyzorba",
  },
  {
    quote: "'잘' 살기 위해, '제대로' 살기 위해 공부를 열심히 해야 한다는 것.",
    author: "한동일",
  },
  {
    quote: "난 지금 아무것도 할 게 없기에 무엇이든 할 수 있는 사람이다.",
    author: "문경연",
  },
  {
    quote: "오직 나만이 나를 행복하게 할 수 있는 유일한 사람이기 때문이다.",
    author: "문경연",
  },
  {
    quote:
      "뭐라도 되려면, 뭐라도 해야 한다고, 그리고 뭐라도 하면, 뭐라도 된다고. 삶은 내게 가르쳐 주었다.",
    author: "심채경",
  },
  {
    quote: "내가 아는 한 가능성이 희박한 일은 결국 좋은 결실을 맺었다.",
    author: "마이크 브라운",
  },
  {
    quote: "중요한 건 멍청해지지 않는 게 아니라 더 똑똑해지는 것이었다.",
    author: "마이크 브라운",
  },
  {
    quote:
      "인생은 가끔가다가 한 번씩 여유가 있는 토요일에만 즐기는 것이 아니라 매일 즐기는 것이라고 투철하게 믿을 것이다.",
    author: "캐럴라인 냅",
  },
  {
    quote: "약자에게 안전한 세상은 결국 모두에게 안전한 세상이다.",
    author: "김소영",
  },
  {
    quote:
      "세상에는 돌아오지 않는 것이 네 가지 있다. 입 밖에 낸 말, 공중에 쏜 화살, 지나간 인생, 그리고 놓쳐 버린 기회.",
    author: "테드 창",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
