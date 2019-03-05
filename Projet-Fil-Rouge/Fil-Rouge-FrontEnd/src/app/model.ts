export interface Produit {
    id: number,
    nom: string;
    description: string;
    prix: number;
    categorie: string;
    sousCategorie: string;
    image: string;
    stock: number;
    commande: Commande;
    actif: boolean;

}

export interface Utilisateur {
    id: number;
    name: string;
    prenom: string;
    adresse: string;
    telephone: number;
    email: string;
    datenaissance: Date;
    password: string;
    num_client: string;
    role: string;
    liste_commandes: Commande[];
}

export interface Commande {
    id: number;
    produitCommandes: Produit[];
    utilisateur: Utilisateur;
    n_client: number;
    ref: string;
    date_creation: string;
    date_validation: string;
    prixTotal: number;
    etat: string;
}