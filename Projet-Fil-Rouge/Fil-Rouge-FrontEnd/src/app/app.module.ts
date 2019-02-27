import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    DropdownComponent,
    AccueilAdminComponent,
    LoginPageComponent
  ],
  imports: [
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
