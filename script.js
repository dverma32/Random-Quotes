// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "Stay hungry, stay foolish. – Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. – Steve Jobs",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "It is better to fail in originality than to succeed in imitation. – Herman Melville" ,
    "The one who doesn't make sacrifice for what they want, What they want becomes the Sacrifice!  – Deepak verma"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

// Initial quote
getRandomQuote();
