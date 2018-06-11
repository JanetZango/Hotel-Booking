import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBedsComponent } from './double-beds.component';

describe('DoubleBedsComponent', () => {
  let component: DoubleBedsComponent;
  let fixture: ComponentFixture<DoubleBedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleBedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
