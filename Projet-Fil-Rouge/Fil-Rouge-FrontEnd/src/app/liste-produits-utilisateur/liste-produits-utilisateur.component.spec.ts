import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitsUtilisateurComponent } from './liste-produits-utilisateur.component';

describe('ListeProduitsUtilisateurComponent', () => {
  let component: ListeProduitsUtilisateurComponent;
  let fixture: ComponentFixture<ListeProduitsUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProduitsUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitsUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
