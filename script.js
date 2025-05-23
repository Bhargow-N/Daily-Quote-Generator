const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs"
];

const quoteElement = document.getElementById('quote');
const nextButton = document.getElementById('nextBtn');

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Trigger fade-out, then update, then fade-in
  quoteElement.classList.remove('show');

  setTimeout(() => {
    quoteElement.textContent = selectedQuote;
    quoteElement.classList.add('show');
  }, 200); // Delay to allow fade-out
}

// Initialize with a quote on load
window.onload = showQuote;
nextButton.addEventListener('click', showQuote);
