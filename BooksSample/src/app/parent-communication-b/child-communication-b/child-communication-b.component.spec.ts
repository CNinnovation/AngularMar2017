import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommunicationBComponent } from './child-communication-b.component';

describe('ChildCommunicationBComponent', () => {
  let component: ChildCommunicationBComponent;
  let fixture: ComponentFixture<ChildCommunicationBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCommunicationBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCommunicationBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
