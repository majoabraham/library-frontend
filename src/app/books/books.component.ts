import {Component, OnInit} from '@angular/core';
import {BookDataService} from "../service/data/book-data.service";
import {Router} from "@angular/router";
import {Reader} from "../readers/readers.component";

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books: Book[] = []

    constructor(private bookDataService: BookDataService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.refreshBooks();
    }

    refreshBooks() {
        this.bookDataService.getAllBooks().subscribe(
            data => {
                this.books = data
            }
        )
    }

    updateBook(bookId: number) {
        this.router.navigate(['books', bookId]);
    }

    addBook() {
        this.router.navigate(['books', -1]);
    }

    checkoutBook(bookId: number) {
        this.router.navigate(['checkout', bookId]);
    }

    showReader(bookId: number) {
        let reader = new Reader(-1, '', '', '', new Date());

        this.bookDataService.getReaderByBookId(bookId).subscribe(
            data => {
                reader = data;
                this.router.navigate(['readers', reader.id]);
            }
        );
    }
}

export class Book {
    constructor(public id: number,
                public title: string,
                public author: string,
                public available: boolean) {
    }
}
