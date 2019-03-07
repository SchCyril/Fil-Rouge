import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeUtilisateurComponent } from './commande-utilisateur.component';

describe('CommandeUtilisateurComponent', () => {
  let component: CommandeUtilisateurComponent;
  let fixture: ComponentFixture<CommandeUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
