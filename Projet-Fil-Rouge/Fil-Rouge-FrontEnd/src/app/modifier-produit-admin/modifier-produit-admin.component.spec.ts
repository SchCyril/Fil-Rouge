import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProduitAdminComponent } from './modifier-produit-admin.component';

describe('ModifierProduitAdminComponent', () => {
  let component: ModifierProduitAdminComponent;
  let fixture: ComponentFixture<ModifierProduitAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProduitAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProduitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
