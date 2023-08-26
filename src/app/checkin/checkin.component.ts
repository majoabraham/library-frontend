import {Component, OnInit} from '@angular/core';
import {BorrowingDataService} from "../service/data/borrowing-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Borrowing} from "../borrowings/borrowings.component";
import {Book} from "../books/books.component";
import {Reader} from "../readers/readers.component";

@Component({
    selector: 'app-checkin',
    templateUrl: './checkin.component.html',
    styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

    borrowingId: number
    borrowing: Borrowing
    book: Book
    reader: Reader

    constructor(private borrowingDataService: BorrowingDataService,
                private route: ActivatedRoute,
                private router: Router) {
        this.borrowingId = route.snapshot.params['borrowingId'];
        this.book = new Book(-1, '', '', false);
        this.reader = new Reader(-1, '', '', '', new Date());
        this.borrowing = new Borrowing(-1, this.book, this.reader, new Date(), new Date());
    }

    ngOnInit(): void {
        this.borrowingDataService.getBorrowingById(this.borrowingId).subscribe(
            data => {
                this.borrowing = data;
                this.borrowing.checkinDate = new Date();
            }
        )
    }

    saveCheckin() {
        this.borrowingDataService.checkin(this.borrowing).subscribe(
            () => this.router.navigate(['borrowings', this.borrowing.reader.id])
        )
    }
}
