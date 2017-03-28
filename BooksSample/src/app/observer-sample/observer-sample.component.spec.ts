import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverSampleComponent } from './observer-sample.component';

describe('ObserverSampleComponent', () => {
  let component: ObserverSampleComponent;
  let fixture: ComponentFixture<ObserverSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
