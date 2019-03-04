import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDetailProduitPanierComponent } from './fiche-detail-produit-panier.component';

describe('FicheDetailProduitPanierComponent', () => {
  let component: FicheDetailProduitPanierComponent;
  let fixture: ComponentFixture<FicheDetailProduitPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheDetailProduitPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDetailProduitPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
