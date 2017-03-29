import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommunicationCComponent } from './parent-communication-c.component';

describe('ParentCommunicationCComponent', () => {
  let component: ParentCommunicationCComponent;
  let fixture: ComponentFixture<ParentCommunicationCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCommunicationCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCommunicationCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
