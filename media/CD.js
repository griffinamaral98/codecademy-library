import { Media } from "./media.js";

export class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tempArr = arr[i];
      arr[i] = arr[j];
      arr[j] = tempArr;
    }
    return arr;
  }
}
