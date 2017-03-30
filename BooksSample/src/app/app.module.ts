import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
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
import { ObserverSampleComponent } from './observer-sample/observer-sample.component';
import { ParentCommunicationAComponent } from './parent-communication-a/parent-communication-a.component';
import { ChildCommunicationAComponent } from './parent-communication-a/child-communication-a/child-communication-a.component';
import { ParentCommunicationBComponent } from './parent-communication-b/parent-communication-b.component';
import { ChildCommunicationBComponent } from './parent-communication-b/child-communication-b/child-communication-b.component';
import { ParentCommunicationCComponent } from './parent-communication-c/parent-communication-c.component';
import { TimerComponentComponent } from './parent-communication-c/timer-component/timer-component.component';
import { BookListAndDetailComponent } from './book-list-and-detail/book-list-and-detail.component';
import { BooksHttpService } from './books-http.service';

const appRoutes: Routes = [
  { path: 'bookslist', component: BooksListComponent },
  { path: 'book:id', component: BookDetailComponent },
  { path: 'observer', component: ObserverSampleComponent },
  { path: '**', component: EmptyPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    CopyrightInfoComponent,
    TitleInfoComponent,
    MenusComponent,
    BookDetailComponent,
    EmptyPageComponent,
    ObserverSampleComponent,
    ParentCommunicationAComponent,
    ChildCommunicationAComponent,
    ParentCommunicationBComponent,
    ChildCommunicationBComponent,
    ParentCommunicationCComponent,
    TimerComponentComponent,
    BookListAndDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: BooksService, useClass: BooksService },
    BooksHttpService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
