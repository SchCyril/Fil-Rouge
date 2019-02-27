import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { AccueilComponent } from './accueil/accueil.component';

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
    LoginPageComponent
  ],
  imports: [
    MenuComponent,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
