import { Book, Movie, CD } from "./media/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const historyOfEverything = new Book(
    "A Short History of Nearly Everything",
    "Bill Bryson",
    544
  );

  historyOfEverything.toggleCheckedOutStatus();
  console.log(historyOfEverything.isCheckedOut);

  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);

  const title = document.querySelector(".title");
  title.textContent = historyOfEverything.title;

  const author = document.querySelector(".author");
  author.textContent = historyOfEverything.author;

  const pages = document.querySelector(".pages");
  pages.textContent = `Pages: ${historyOfEverything.pages}`;

  const rating = document.querySelector(".rating");
  rating.textContent = `Average User Rating: ${historyOfEverything.getAverageRating()}`;

  // Create a new Movie
  const speed = new Movie("Speed", "Jan de Bont", 116);
  speed.toggleCheckedOutStatus();
  console.log(speed.isCheckedOut);

  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());

  // Create a new CD
  const dissection = new CD("Frog Mallet", "Dissection by Amphibian", [
    "Lord of the Pond",
    "SANGUISUGAFROGG (ft. Sanguisugabogg)",
    "Sludge of the Swamp",
    "BULLFROG BEATDOWN (ft. Inferious)",
    "The Righteous Amphibious Mallet (ft. Undeath)",
    "Krag'wa The Huge",
    "Proteus The Wartbringer (ft. Bodysnatcher)",
    "I AM FROG",
    "Chapter One: Intoaduction",
  ]);
  dissection.toggleCheckedOutStatus();
  console.log(dissection.isCheckedOut);

  dissection.addRating(5);
  dissection.addRating(4);
  dissection.addRating(5);
  console.log(dissection.getAverageRating());
  console.log(dissection.songs);
  console.log(`Shuffled songs:\n ${dissection.shuffle(dissection.songs)}`);
});
