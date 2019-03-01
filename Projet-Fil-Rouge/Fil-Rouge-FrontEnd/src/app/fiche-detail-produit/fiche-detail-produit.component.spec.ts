import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDetailProduitComponent } from './fiche-detail-produit.component';

describe('FicheDetailProduitComponent', () => {
  let component: FicheDetailProduitComponent;
  let fixture: ComponentFixture<FicheDetailProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheDetailProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
