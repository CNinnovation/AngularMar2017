import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommunicationAComponent } from './child-communication-a.component';

describe('ChildCommunicationAComponent', () => {
  let component: ChildCommunicationAComponent;
  let fixture: ComponentFixture<ChildCommunicationAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCommunicationAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCommunicationAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
