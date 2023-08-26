import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../app.constants";
import {Borrowing} from "../../borrowings/borrowings.component";

@Injectable({
    providedIn: 'root'
})
export class BorrowingDataService {

    constructor(private http: HttpClient) {
    }

    getBorrowingById(borrowingId: number) {
        return this.http.get<Borrowing>(`${API_URL}/borrowings/${borrowingId}`);
    }

    getBorrowingByBookId(bookId: number) {
        return this.http.get<Borrowing>(`${API_URL}/borrowings/books/${bookId}`);
    }

    checkout(borrowing: Borrowing) {
        return this.http.post<Borrowing>(`${API_URL}/checkout`, borrowing);
    }

    checkoutBook(bookId: number, readerId: number, checkoutDate: Date) {
        return this.http.post<Borrowing>(`${API_URL}/checkout/${bookId}/${readerId}`, checkoutDate);
    }

    checkin(borrowing: Borrowing) {
        return this.http.put<Borrowing>(`${API_URL}/checkin`, borrowing);
    }

    checkinBook(borrowingId: number, checkinDate: Date) {
        return this.http.put<Borrowing>(`${API_URL}/checkin/${borrowingId}`, checkinDate);
    }
}
