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
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    MenuComponent,
    DropdownComponent,
    AccueilAdminComponent,
    CreerProduitAdminComponent,
    LoginPageComponent,
    MenuComponent
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
