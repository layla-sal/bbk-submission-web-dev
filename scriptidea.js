const itemArray = [
  "Market Bag",
  "Baby Blanket",
  "Hat",
  "Socks",
  "Coaster",
  "Scarf",
  "Shawl",
  "Gloves",
  "Dishcloth",
  "Beanie",
  "Cardigan",
  "Throw",
  "Basket",
  "Beach Bag",
  "Ear Warmer",
  "Mug Cozy",
  "Floor Pouf",
  "Basket",
  "Fingerless Gloves",
  "Pillowcase",
  "Leg Warmers",
  "Ornaments",
];

function generateRandomIdea(array) {
  setTimeout(() => {
    let randomWord = itemArray[Math.floor(Math.random() * itemArray.length)];
    document.getElementById("idea").innerHTML = randomWord;
  }, 1000);
}
