import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reader} from "../../readers/readers.component";
import {API_URL} from "../../app.constants";
import {Borrowing} from "../../borrowings/borrowings.component";

@Injectable({
    providedIn: 'root'
})
export class ReaderDataService {

    constructor(private http: HttpClient) {
    }

    getAllReaders() {
        return this.http.get<Reader[]>(`${API_URL}/readers`);
    }

    getReaderById(readerId: number) {
        return this.http.get<Reader>(`${API_URL}/readers/${readerId}`);
    }

    createReader(reader: Reader) {
        return this.http.post<Reader>(`${API_URL}/readers`, reader);
    }

    updateReader(readerId: number, reader: Reader) {
        return this.http.put<Reader>(`${API_URL}/readers/${readerId}`, reader);
    }

    getReaderBorrowing(readerId: number) {
        return this.http.get<Borrowing[]>(`${API_URL}/readers/${readerId}/borrowings`);
    }
}
