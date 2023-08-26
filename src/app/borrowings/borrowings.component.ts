import {Component, OnInit} from '@angular/core';
import {Book} from "../books/books.component";
import {Reader} from "../readers/readers.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ReaderDataService} from "../service/data/reader-data.service";

@Component({
    selector: 'app-borrowings',
    templateUrl: './borrowings.component.html',
    styleUrls: ['./borrowings.component.css']
})
export class BorrowingsComponent implements OnInit {

    readerId: number
    borrowings: Borrowing[] = []

    constructor(private readerDataService: ReaderDataService,
                private route: ActivatedRoute,
                private router: Router) {
        this.readerId = route.snapshot.params['readerId']
    }

    ngOnInit(): void {
        this.refreshBorrowings();
    }

    private refreshBorrowings() {
        this.readerDataService.getReaderBorrowing(this.readerId).subscribe(
            data => this.borrowings = data
        )
    }

    checkinBook(borrowingId: number) {
        this.router.navigate(['checkin', borrowingId])
    }
}

export class Borrowing {
    constructor(public id: number,
                public book: Book,
                public reader: Reader,
                public checkoutDate: Date,
                public checkinDate: Date) {
    }
}
