import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitsAdminComponent } from './liste-produits-admin.component';

describe('ListeProduitsAdminComponent', () => {
  let component: ListeProduitsAdminComponent;
  let fixture: ComponentFixture<ListeProduitsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProduitsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
