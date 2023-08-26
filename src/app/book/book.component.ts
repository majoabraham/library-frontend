import {Component, OnInit} from '@angular/core';
import {Book} from "../books/books.component";
import {BookDataService} from "../service/data/book-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    bookId: number
    book: Book

    constructor(private bookDataService: BookDataService, private route: ActivatedRoute, private router: Router) {
        this.bookId = this.route.snapshot.params['bookId'];
        this.book = new Book(this.bookId, '', '', false);
    }

    ngOnInit(): void {
        if (this.bookId != -1) {
            this.bookDataService.getBookById(this.bookId).subscribe(
                data => this.book = data
            );
        }
    }

    saveBook() {
        if (this.bookId == -1) {
            this.bookDataService.createBook(this.book).subscribe(
                () => this.router.navigate(['books'])
            )
        } else {
            this.bookDataService.updateBook(this.bookId, this.book).subscribe(
                () => this.router.navigate(['books'])
            )
        }
    }
}
