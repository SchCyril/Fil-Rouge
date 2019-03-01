import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDvdComponent } from './liste-dvd.component';

describe('ListeDvdComponent', () => {
  let component: ListeDvdComponent;
  let fixture: ComponentFixture<ListeDvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
