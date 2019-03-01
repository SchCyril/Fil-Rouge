import { Routes } from '@angular/router';
import { CreerProduitAdminComponent } from './creer-produit-admin/creer-produit-admin.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ModificationProduitAdminComponent } from './modification-produit-admin/modification-produit-admin.component';
import { HistoCommandesAdminComponent } from './histo-commandes-admin/histo-commandes-admin.component';
import { ListeProduitsAdminComponent } from './liste-produits-admin/liste-produits-admin.component';

export const ROUTES: Routes = [
    { path: 'Admin', component: AccueilAdminComponent },
    { path: 'ModificationProduit', component: ModificationProduitAdminComponent },
    { path: '', component: MenuAdminComponent },
    { path: 'CreerProduit', component: CreerProduitAdminComponent },
    { path: 'Historique', component: HistoCommandesAdminComponent },
    { path: 'ListeProduitsAdmin', component: ListeProduitsAdminComponent }
];