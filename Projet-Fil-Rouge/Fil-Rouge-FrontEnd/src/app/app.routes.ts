import { Routes } from '@angular/router';
import { CreerProduitAdminComponent } from './creer-produit-admin/creer-produit-admin.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ModifierProduitAdminComponent } from './modifier-produit-admin/modifier-produit-admin.component';
import { HistoCommandesAdminComponent } from './histo-commandes-admin/histo-commandes-admin.component';

export const ROUTES: Routes = [
    { path: 'Admin', component: AccueilAdminComponent },
    { path: 'CreerProduit', component: CreerProduitAdminComponent },
    { path: 'ModifProduit', component: ModifierProduitAdminComponent },
    { path: 'Historique', component: HistoCommandesAdminComponent },
];