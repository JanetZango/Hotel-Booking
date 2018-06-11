import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatonComponent } from './confirmaton.component';

describe('ConfirmatonComponent', () => {
  let component: ConfirmatonComponent;
  let fixture: ComponentFixture<ConfirmatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
