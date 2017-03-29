import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAndDetailComponent } from './book-list-and-detail.component';

describe('BookListAndDetailComponent', () => {
  let component: BookListAndDetailComponent;
  let fixture: ComponentFixture<BookListAndDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListAndDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListAndDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
