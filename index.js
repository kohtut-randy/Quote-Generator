// const quoteContainer = document.getElementById("quote-container");
// const quoteText = document.getElementById("quote");
// const authorText = document.getElementById("author");
// const twitterBtn = document.getElementById("twitter");
// const newQuoteBtn = document.getElementById("new-quote");

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("LOADED");
//   alert("LOAED");
// });

// async function getQuote() {
//   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   const apiUrl =
//     "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//     const data = await response.json();

//     if (data.quoteAuthor === "") {
//       authorText.innerText = "Unkown";
//     } else {
//       authorText.innerText = data.quoteAuthor;
//     }

//     if (data.quoteText.length > 120) {
//       quoteText.classList.add("long-quote");
//     } else {
//       quoteText.classList.remove("long-quote");
//     }
//     quoteText.innerText = data.quoteText;

//     console.log("DATA", data);
//   } catch (error) {
//     console.log("whoop, no quote", error);
//   }
// }

// tweetQuote = () => {
//   const quote = quoteText.innerText;
//   const author = authorText.innerText;
//   const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;

//   window.open(twitterUrl, "_blank");
// };

// // EVENT LISTENERs
// newQuoteBtn.addEventListener("click", getQuote);
// twitterBtn.addEventListener("click", tweetQuote);

// getQuote();
