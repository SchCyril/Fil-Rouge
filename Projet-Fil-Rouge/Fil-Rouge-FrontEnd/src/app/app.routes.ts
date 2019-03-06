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
import { ListeProduitsAdminComponent } from './liste-produits-admin/liste-produits-admin.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitComponent } from './produit/produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageModifCommandeAdminComponent } from './page-modif-commande-admin/page-modif-commande-admin.component';

export const ROUTES: Routes = [
    { path: 'Admin', component: AccueilAdminComponent },
    { path: '', component: MenuComponent },
    { path: 'Produit/:id', component: ModificationProduitAdminComponent },
    { path: 'Accueil', component: AccueilComponent },
    { path: 'Categorie/:cat', component: ListeProduitComponent },
    { path: 'Nom/:nom', component: ListeProduitComponent },
    { path: 'Login', component: LoginPageComponent },
    { path: 'ModificationProduit', component: ModificationProduitAdminComponent },
    { path: 'CreerProduit', component: CreerProduitAdminComponent },
    { path: 'Historique', component: HistoCommandesAdminComponent },
    { path: 'Panier', component: PanierComponent },
    { path: 'ModificationCommande', component: PageModifCommandeAdminComponent },
    { path: 'ModificationCommande/:id', component: PageModifCommandeAdminComponent },
    { path: 'ListeProduitsAdmin', component: ListeProduitsAdminComponent },
    { path: 'ListeProduitsAdmin/:id', component: ListeProduitsAdminComponent }

];