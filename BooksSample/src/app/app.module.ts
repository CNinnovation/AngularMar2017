import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CopyrightInfoComponent } from './copyright-info/copyright-info.component';
import { TitleInfoComponent } from './title-info/title-info.component';
import { MenusComponent } from './menus/menus.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { BooksService } from './books.service';
import { LoggerService } from './logger.service';

const appRoutes: Routes = [
  { path: 'bookslist', component: BooksListComponent },
  { path: 'book', component: BookDetailComponent },
  { path: '*', component: EmptyPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    CopyrightInfoComponent,
    TitleInfoComponent,
    MenusComponent,
    BookDetailComponent,
    EmptyPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    BooksService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
