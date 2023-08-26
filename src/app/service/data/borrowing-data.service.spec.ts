import {TestBed} from '@angular/core/testing';

import {BorrowingDataService} from './borrowing-data.service';

describe('BorrowingDataService', () => {
    let service: BorrowingDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BorrowingDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
