/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

//generates a random integer from 1 up to the input
function getRandomNumber(max) {
  let randomN;
  randomN = Math.floor(Math.random()*max) + 1;
  return randomN;
}

function getRandomQuote() {
  let index = getRandomNumber(quotes.length) - 1;
  return quotes[index];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let strHTML = '';
  strHTML += '<p class="quote">' + randomQuote.quote + '</p>';
  strHTML += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation !== '') {
    strHTML += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.hasOwnProperty('year')){
    strHTML += '<span class="year">' + randomQuote.year + '</span>';
  }
  strHTML += '</p>';
  let quoteBoxDiv = document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = strHTML;
}

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.