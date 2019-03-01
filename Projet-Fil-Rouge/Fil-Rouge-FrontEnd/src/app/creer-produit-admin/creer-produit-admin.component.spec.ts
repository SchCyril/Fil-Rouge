import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProduitAdminComponent } from './creer-produit-admin.component';

describe('CreerProduitAdminComponent', () => {
  let component: CreerProduitAdminComponent;
  let fixture: ComponentFixture<CreerProduitAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerProduitAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerProduitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
