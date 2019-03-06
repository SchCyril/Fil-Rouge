import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifCommandeAdminComponent } from './page-modif-commande-admin.component';

describe('PageModifCommandeAdminComponent', () => {
  let component: PageModifCommandeAdminComponent;
  let fixture: ComponentFixture<PageModifCommandeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageModifCommandeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifCommandeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
