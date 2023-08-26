import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../../books/books.component";
import {API_URL} from "../../app.constants";
import {Reader} from "../../readers/readers.component";

@Injectable({
    providedIn: 'root'
})
export class BookDataService {

    constructor(private http: HttpClient) {
    }

    getAllBooks() {
        return this.http.get<Book[]>(`${API_URL}/books`);
    }

    getBookById(id: number) {
        return this.http.get<Book>(`${API_URL}/books/${id}`);
    }

    createBook(book: Book) {
        return this.http.post<Book>(`${API_URL}/books`, book);
    }

    updateBook(id: number, book: Book) {
        return this.http.put<Book>(`${API_URL}/books/${id}`, book);
    }

    getReaderByBookId(bookId: number) {
        return this.http.get<Reader>(`${API_URL}/books/${bookId}/reader`);
    }
}
