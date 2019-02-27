import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from'@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeProduitComponent,
    ProduitComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
