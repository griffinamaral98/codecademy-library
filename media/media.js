import { CD, Movie, Book } from "./index.js";

export class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckedOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    let average = Math.round(ratingSum / this._ratings.length);
    console.log(average);
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}
