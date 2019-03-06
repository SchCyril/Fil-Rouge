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
    produitCommandes: PanierItems[];
    utilisateur: Utilisateur;
    reference: string;
    dateCommande: string;
    dateLivraison: string;
    prixTotal: number;
    etat: string;
}

export interface PanierItems {
    produit: Produit,
    quantite: number
}

export interface CommandeDto {
    id: number,
    reference: string,
    dateCommande: string,
    dateLivraison: string,
    prixTotal: number,
    etat: string,
    numeroClient: number,
    utilisateurId: number,
    commandeProduits: CommandeProduitDto[]
}

export interface CommandeProduitDto {
    produitId: number,
    quantite: number
}