import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {BooksComponent} from './books/books.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BookComponent} from './book/book.component';
import {ReaderComponent} from './reader/reader.component';
import {ReadersComponent} from './readers/readers.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {BorrowingsComponent} from './borrowings/borrowings.component';
import {CheckinComponent} from './checkin/checkin.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent,
        WelcomeComponent,
        BooksComponent,
        BookComponent,
        ReaderComponent,
        ReadersComponent,
        CheckoutComponent,
        BorrowingsComponent,
        CheckinComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
