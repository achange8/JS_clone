const quotes = [
    {
        quote: "A",
    author: "a",
},
{
    quote: "B",
author: "b",
},
{
    quote: "C",
author: "c",
},
{
    quote: "D",
author: "d",
},
{
    quote: "E",
author: "e",
},
{
    quote: "F",
author: "f",
},
]



const quote = document.querySelector(".quote span:first-child"); 
const author = document.querySelector(".quote span:last-child"); 
const length = quotes.length;
const rng = Math.floor(Math.random()*length);
const todaysQuote = quotes[rng];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;