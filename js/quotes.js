const quotes = [
    {
        quote: "Was mich nicht umbringt macht mich stärker.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "그땐 그게 나에게 최선이었다.",
        author: "",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
