import {Component, OnInit} from '@angular/core';
import {Reader} from "../readers/readers.component";
import {Book} from "../books/books.component";
import {ActivatedRoute, Router} from "@angular/router";
import {BookDataService} from "../service/data/book-data.service";
import {ReaderDataService} from "../service/data/reader-data.service";
import {BorrowingDataService} from "../service/data/borrowing-data.service";
import {Borrowing} from "../borrowings/borrowings.component";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    bookId: number
    book: Book
    readers: Reader[] = []
    reader: Reader
    borrowing: Borrowing


    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookDataService: BookDataService,
                private readerDataService: ReaderDataService,
                private borrowingDataService: BorrowingDataService) {

        this.bookId = this.route.snapshot.params['bookId'];
        this.book = new Book(this.bookId, '', '', false);
        this.reader = new Reader(-1, '', '', '', new Date());
        this.borrowing = new Borrowing(-1, this.book, this.reader, new Date(), new Date());

    }

    ngOnInit(): void {
        this.bookDataService.getBookById(this.bookId).subscribe(
            data => {
                this.borrowing.book = data
            }
        );
        this.readerDataService.getAllReaders().subscribe(
            data => this.readers = data
        )
    }

    saveCheckout() {
        this.borrowingDataService.checkout(this.borrowing).subscribe(
            () => this.router.navigate(['books'])
        )
    }
}
