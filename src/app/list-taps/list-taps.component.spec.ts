import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTapsComponent } from './list-taps.component';

describe('ListTapsComponent', () => {
  let component: ListTapsComponent;
  let fixture: ComponentFixture<ListTapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
