const quotes = [
    'I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.',
    'The cure for a fallacious argument is a better argument, not the suppression of ideas',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception dispoves the rules',
    "Don't judge each day by the harvest you reap, but by the seeds you plant",
    'Nothing clears up a case so much as stating it to another person',
    'Education never ends, Watson. Life is a series of learning and learning until the day we die.'
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedvalueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', () =>{
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
    typedvalueElement.value = '';
    typedvalueElement.focus();
    startTime = new Date().getTime();
});