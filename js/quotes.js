const $quotes = [
  { quote: "삶이 있는 한 희망은 있다.", author: "키케로" },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  { quote: "피할수 없으면 즐겨라.", author: "로버트 엘리엇" },
  { quote: "행복은 습관이다,그것을 몸에 지니라.", author: "허버드" },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
    author: "찰리 채플린",
  },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
    author: "엘사 맥스웰",
  },
  {
    quote:
      "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
    author: "채근담 ",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author: "이소룡",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const todayQuotes = $quotes[Math.floor(Math.random() * $quotes.length)];

quote.innerHTML = todayQuotes.quote;
author.innerHTML = todayQuotes.author;
