import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitCommandeAdminComponent } from './liste-produit-commande-admin.component';

describe('ListeProduitCommandeAdminComponent', () => {
  let component: ListeProduitCommandeAdminComponent;
  let fixture: ComponentFixture<ListeProduitCommandeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProduitCommandeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitCommandeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
