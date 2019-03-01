export interface Produit {
    nom: string;
    desc: string;
    prix: number;
    categorie: string;
    sous_categorie: string;
    image: string;
    stock: number;
    commande: Commande;
    actif: boolean

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
    ref: string;
    date_creation: Date;
    date_validation: Date;
    prix_total: number;
    etat: string;
}