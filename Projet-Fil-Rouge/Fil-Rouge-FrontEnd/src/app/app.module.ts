import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { ROUTES } from "./app.routes"
import { RouterModule } from '@angular/router';
import { CreerProduitAdminComponent } from './creer-produit-admin/creer-produit-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { ListeDvdComponent } from './liste-dvd/liste-dvd.component';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';
import { HistoCommandesAdminComponent } from './histo-commandes-admin/histo-commandes-admin.component';
import { ModificationProduitAdminComponent } from './modification-produit-admin/modification-produit-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeProduitComponent,
    ProduitComponent,
    AccueilComponent,
    MenuAdminComponent,
    DropdownComponent,
    AccueilAdminComponent,
    CreerProduitAdminComponent,
    LoginPageComponent,
    MenuComponent,
    ListeLivresComponent,
    ListeDvdComponent,
    ListeJeuxComponent
    ModificationProduitAdminComponent,
    HistoCommandesAdminComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
