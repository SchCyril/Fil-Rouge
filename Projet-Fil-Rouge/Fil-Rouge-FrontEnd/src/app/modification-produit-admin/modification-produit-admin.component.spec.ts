import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationProduitAdminComponent } from './modification-produit-admin.component';

describe('ModificationProduitAdminComponent', () => {
  let component: ModificationProduitAdminComponent;
  let fixture: ComponentFixture<ModificationProduitAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationProduitAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationProduitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
