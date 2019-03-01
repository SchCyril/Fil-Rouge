import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoCommandesAdminComponent } from './histo-commandes-admin.component';

describe('HistoCommandesAdminComponent', () => {
  let component: HistoCommandesAdminComponent;
  let fixture: ComponentFixture<HistoCommandesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoCommandesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoCommandesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
