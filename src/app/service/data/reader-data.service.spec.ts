import {TestBed} from '@angular/core/testing';

import {ReaderDataService} from './reader-data.service';

describe('ReaderDataService', () => {
    let service: ReaderDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ReaderDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
