
// To generate JavaScript code
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Array to generate "Quote"
let quote = [
  "Astro: &ldquo; Energetic, passionate with hot emotions. &rdquo;",
  "Joke: &ldquo; I said to the Gym instructor “Can you teach me to do the splits?” He said, “How flexible are you?” I said, “I can’t make Tuesdays. &rdquo;",
  "Wisdom: &ldquo; Pursue Passion More Than Profit. &rdquo;",
  "Astro: &ldquo; Energetic, passionate with hot emotions. &rdquo; ",
  " Joke: &ldquo; Doc, I can’t stop singing the ‘Green Green Grass of Home’. He said: “That sounds like Tom Jones syndrome.” “Is it common?” I asked.  “It’s not unusual” he replied. &rdquo;",
  "Wisdom: &ldquo; Don't fear to be wrong. &rdquo;",
  "Astro: &ldquo; Values comfort, beautiful surroundings, and indulgence. &rdquo;",
  "Joke: &ldquo; I’m on a whiskey diet. I’ve lost three days already. &rdquo;",
  "Wisdom: &ldquo; Even death is not to be feared by one who has lived wisely. &rdquo;",
  "Astro:  &ldquo; Unique, futuristic, and caring towards the collective. &rdquo;",
  "Joke: &ldquo; Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one – and let the other one off. &rdquo;",
  "Wisdom: &ldquo; Nothing can harm you as much as your own thoughts unguarded. &rdquo;"

];



// Call addEventListener funtion to "Click" to generate ramdom messages
btn.addEventListener("click", function () {
  let randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
});