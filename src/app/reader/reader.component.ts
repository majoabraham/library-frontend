import {Component, OnInit} from '@angular/core';
import {Reader} from "../readers/readers.component";
import {ReaderDataService} from "../service/data/reader-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-reader',
    templateUrl: './reader.component.html',
    styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
    readerId: number
    reader: Reader

    constructor(private readerDataService: ReaderDataService,
                private route: ActivatedRoute,
                private router: Router) {

        this.readerId = this.route.snapshot.params['readerId'];
        this.reader = new Reader(this.readerId, '', '', '', new Date());
    }

    ngOnInit(): void {
        if (this.readerId != -1) {
            this.readerDataService.getReaderById(this.readerId).subscribe(
                data => this.reader = data
            );
        }
    }

    saveReader() {
        if (this.readerId == -1) {
            this.readerDataService.createReader(this.reader).subscribe(
                () => this.router.navigate(['readers'])
            )
        } else {
            this.readerDataService.updateReader(this.readerId, this.reader).subscribe(
                () => this.router.navigate(['readers'])
            )
        }
    }
}
