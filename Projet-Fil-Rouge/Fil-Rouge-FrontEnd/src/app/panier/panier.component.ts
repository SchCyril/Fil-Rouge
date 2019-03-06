import { Component, OnInit, Input } from '@angular/core';
import { Produit, PanierItems, Commande, Utilisateur, CommandeDto, CommandeProduitDto } from '../model';
import { PanierService } from '../service/panier.service';
import { map } from 'rxjs/operators';
import { CommandeService } from '../service/commande.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits: Produit[]
  prixTotal: number = 0;
  listePanier: PanierItems[] = []


  constructor(private _panierService: PanierService, private _commandeService: CommandeService, private _loginService: LoginService) {

    let it: Date = new Date();
    console.log(it)
  }

  ngOnInit() {
    this.produits = this._panierService.lister()
    this.prixTotal = this.calcul();
    this.remplissageMap()
    let it: Date = new Date();
    console.log((it.getMonth() + 1).toString() + " " + it.getDay().toString())
  }

  refreshListe() {
    this.produits = this._panierService.lister()
  }

  deleteProduit(id: number) {
    this._panierService.deleteProduitPanier(id)
    this.refreshListe()
    this.prixTotal = this.calcul();
    this.remplissageMap();
  }

  calcul(): number {
    let aux: number = 0;
    for (let prix of this.produits) {
      aux += prix.prix
    }
    return aux;
  }

  remplissageMap() {
    this.listePanier = []
    for (let obj of this.produits) {
      let present: boolean = false
      for (let produits of this.listePanier) {
        if (produits.produit.id === obj.id) {
          produits.quantite += 1;
          present = true;
        }
      }
      if (!present) {
        let produit: PanierItems = {
          "produit": obj,
          "quantite": 1
        }
        this.listePanier.push(produit)
      }
    }
  }

  ValiderCommande() {
    let user: Utilisateur = null;
    this._loginService.loggedInUser().subscribe(
      value => {
        user = value;

        let commandeProduitDtos: CommandeProduitDto[] = [];
        for (let i = 0; i < this.listePanier.length; i++) {
          let commandeProduitDto: CommandeProduitDto = {
            produitId: this.listePanier[i].produit.id,
            quantite: this.listePanier[i].quantite
          }
          commandeProduitDtos.push(commandeProduitDto);
        }

        let it: Date = new Date();
        console.log(it.toDateString())
        let date: string = this.calculDate(it, 0)
        let datePlus: string = this.calculDate(it, 1)
        console.log("premire date : " + date + " seconde date : " + datePlus)
        console.log("2019-02-03" === date)
        let commande: CommandeDto = {
          id: null,
          utilisateurId: user.id,
          numeroClient: user.id,
          reference: "COM",
          dateCommande: date,
          dateLivraison: datePlus,
          prixTotal: this.prixTotal,
          etat: "en cours",
          commandeProduits: commandeProduitDtos
        }
        this._commandeService.ajouterCommandeDto(commande);
        this.produits = []
        localStorage.setItem('listePanier', JSON.stringify(this.produits))
        this.remplissageMap()
        this.prixTotal = 0;
      }
    )
  }

  calculDate(date: Date, ajout: number) {

    let res: string = date.getFullYear().toString()
    if (date.getMonth() + 1 + ajout <= 9) {
      res += "-0" + (date.getMonth() + 1 + ajout).toString()
    }
    else {
      if (date.getMonth() + 1 + ajout === 13) {
        res = (date.getFullYear() + 1).toString() + "-01"
      }
      else {
        res += "-" + (date.getMonth() + 1 + ajout).toString();
      }
    }
    if (Number(date.toLocaleDateString().substring(0, 2)) <= 9) {
      res += "-0" + Number(date.toLocaleDateString().substring(0, 2)).toString();
    }
    else {
      res += "-" + Number(date.toLocaleDateString().substring(0, 2)).toString()
    }
    return res;
  }
}
