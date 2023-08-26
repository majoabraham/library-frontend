import {Component, OnInit} from '@angular/core';
import {ReaderDataService} from "../service/data/reader-data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-readers',
    templateUrl: './readers.component.html',
    styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {

    readers: Reader[] = []

    constructor(private readerDataService: ReaderDataService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.refreshReaders();
    }

    refreshReaders() {
        this.readerDataService.getAllReaders().subscribe(
            data => {
                this.readers = data
            }
        )
    }

    updateReader(id: number) {
        this.router.navigate(['readers', id]);
    }

    addReader() {
        this.router.navigate(['readers', -1])
    }

    showCheckouts(readerId: number) {
        this.router.navigate(['borrowings', readerId]);
    }
}

export class Reader {
    constructor(public id: number,
                public firstName: string,
                public lastName: string,
                public idCard: string,
                public birthDate: Date) {
    }

}
