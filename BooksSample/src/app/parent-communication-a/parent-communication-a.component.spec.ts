import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommunicationAComponent } from './parent-communication-a.component';

describe('ParentCommunicationAComponent', () => {
  let component: ParentCommunicationAComponent;
  let fixture: ComponentFixture<ParentCommunicationAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCommunicationAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCommunicationAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
