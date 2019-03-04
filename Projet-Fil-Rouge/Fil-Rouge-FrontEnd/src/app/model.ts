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
    nom: string;
    prenom: string;
    adresse: string;
    num_tel: number;
    mail: string;
    date_naissance: Date;
    password: string;
    num_client: string;
    role: string;
    liste_commandes: Commande[];
}

export interface Commande {
    id: number;
    liste_produits: Produit[];
    utilisateur: Utilisateur;
    n_client: number;
    ref: string;
    date_creation: string;
    date_validation: string;
    prix_total: number;
    etat: string;
}