"use strict";
const quotes = [
  {
    quote:
      " للراغبين في تحقيق الربح من الإنترنت يجب عليهم إستشارة ذوي الخبرة ليرشدوهم لأهم وسائل تحقيق الدخل والربح المادي من الإنترنت الآمنة والموثوقة لضمان حقوقهم وأموالهم.",
    author: " مدمن ويب"
  },
  {
    quote:
      "<b><a href="https://www.md3bm.com/search/label/%D8%A7%D9%84%D8%B1%D8%A8%D8%AD%20%D9%85%D9%86%20%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA">كسب المال والربح من الإنترنت</a></b> له العديد من الطرق والأساليب التي يمكنك من خلالها
  كسب الأموال وتحقيق الدخل من الإنترنت ومن المنزل، ومن هذه الطرق كسب المال من
  المشاريع والطبيقات البرمجية مفتوحة المصدر، حيث هنالك عدة طرق رائعة لكسب المال
  من خلال المشاريع مفتوحة المصدر (Make money from Open Source Projects). فأنا
  شخصياً، لقد كسبت ما يزيد عن 4000 دولار من مشاريع أخرى مفتوحة المصدر حتى الآن.
  وهذا الأمر مسموح وقانوني 100.",
    author: "John Kenneth Galbraith"
  },
  {
    quote: "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars "
  },
  {
    quote: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau"
  },
  {
    quote:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh"
  },
  {
    quote:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly"
  }
];

let q = document.querySelector("#quoteText");
let n = document.querySelector("#nameText");

function generateQuote() {
  let random = parseInt(Math.random() * quotes.length);
  q.innerHTML = quotes[random].quote;
  n.innerText = quotes[random].author;
}
