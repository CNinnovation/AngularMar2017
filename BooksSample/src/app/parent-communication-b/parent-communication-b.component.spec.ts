import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommunicationBComponent } from './parent-communication-b.component';

describe('ParentCommunicationBComponent', () => {
  let component: ParentCommunicationBComponent;
  let fixture: ComponentFixture<ParentCommunicationBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCommunicationBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCommunicationBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
