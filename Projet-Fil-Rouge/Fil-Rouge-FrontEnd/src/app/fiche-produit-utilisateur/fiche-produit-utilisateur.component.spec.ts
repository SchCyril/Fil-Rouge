import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProduitUtilisateurComponent } from './fiche-produit-utilisateur.component';

describe('FicheProduitUtilisateurComponent', () => {
  let component: FicheProduitUtilisateurComponent;
  let fixture: ComponentFixture<FicheProduitUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProduitUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProduitUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
