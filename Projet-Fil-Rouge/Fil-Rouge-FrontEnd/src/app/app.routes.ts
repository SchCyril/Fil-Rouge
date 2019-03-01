import { Routes } from '@angular/router';
import { CreerProduitAdminComponent } from './creer-produit-admin/creer-produit-admin.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { MenuComponent } from './menu/menu.component';
import { ListeDvdComponent } from './liste-dvd/liste-dvd.component';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';
import { ModificationProduitAdminComponent } from './modification-produit-admin/modification-produit-admin.component';
import { HistoCommandesAdminComponent } from './histo-commandes-admin/histo-commandes-admin.component';

export const ROUTES: Routes = [
    { path: 'Admin', component: AccueilAdminComponent },
    { path: '', component: MenuComponent },
    { path: 'Accueil', component: AccueilComponent},
    { path: 'Livre', component:ListeLivresComponent},
    { path: 'Dvd', component:ListeDvdComponent},
    { path: 'Jeux-videos', component: ListeJeuxComponent},
    { path: 'Lister/:cat', component: ListeLivresComponent},
    { path: 'ModificationProduit', component: ModificationProduitAdminComponent },
    { path: 'CreerProduit', component: CreerProduitAdminComponent },
    { path: 'Historique', component: HistoCommandesAdminComponent }
];