import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: this.rateUpAllowed(book) ? book.rating + 1 : book.rating
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: this.rateDownAllowed(book) ? book.rating - 1 : book.rating
    };
  }

  rateDownAllowed(book: Book) {
    return book.rating > this.minRating;
  }

  rateUpAllowed(book: Book) {
    return book.rating < this.maxRating;
  }

}
