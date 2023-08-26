import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {BooksComponent} from "./books/books.component";
import {BookComponent} from "./book/book.component";
import {ReadersComponent} from "./readers/readers.component";
import {ReaderComponent} from "./reader/reader.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CheckinComponent} from "./checkin/checkin.component";
import {BorrowingsComponent} from "./borrowings/borrowings.component";

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'books', component: BooksComponent},
    {path: 'books/:bookId', component: BookComponent},
    {path: 'readers', component: ReadersComponent},
    {path: 'readers/:readerId', component: ReaderComponent},
    {path: 'borrowings/:readerId', component: BorrowingsComponent},
    {path: 'checkout/:bookId', component: CheckoutComponent},
    {path: 'checkin/:borrowingId', component: CheckinComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
