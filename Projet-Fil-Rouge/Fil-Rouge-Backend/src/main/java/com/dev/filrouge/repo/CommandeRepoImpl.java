package com.dev.filrouge.repo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaContext;
import org.springframework.stereotype.Repository;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.model.Produit;
import com.dev.filrouge.model.SearchCommande;
import com.dev.filrouge.model.Utilisateur;
import org.springframework.util.StringUtils;
@Repository
public class CommandeRepoImpl {
	
	private EntityManager em;
	
	@Autowired
	public void setJpaContext(JpaContext jpaContext) {
        this.em = jpaContext.getEntityManagerByManagedType(Produit.class);
    }

	
	public SearchCommande searchAdmin(Long id, String reference, Utilisateur utilisateur, float prixTotal, String etat) {

        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<Commande> query = builder.createQuery(Commande.class);
        Root<Commande> root = query.from(Commande.class);
        Predicate idPredicate = builder.and();
        Predicate referencePredicate = builder.and();
        Predicate utilisateurPredicate = builder.and();
        Predicate prixTotalPredicate = builder.and();
        Predicate etatPredicate = builder.and();

        if (!StringUtils.isEmpty(id)) {
        	idPredicate = builder.like(builder.upper(root.get("id")), "%");
        }
        if (!StringUtils.isEmpty(reference)) {
        	referencePredicate = builder.like(builder.upper(root.get("id")), "%");
        }
        if (!StringUtils.isEmpty(utilisateur)) {
            utilisateurPredicate = builder.like(builder.upper(root.get("utilisateur")),
                    "%");
        }
        if (!StringUtils.isEmpty(prixTotal)) {
        	prixTotalPredicate = builder.like(builder.upper(root.get("prixTotal")),
                    "%");
        }
        if (!StringUtils.isEmpty(etat)) {
        	etatPredicate = builder.like(builder.upper(root.get("etat")),
                    "%");
        }

        query.where(builder.and(idPredicate, referencePredicate, utilisateurPredicate, prixTotalPredicate, etatPredicate));

        TypedQuery<Commande> commandeQuery = em.createQuery(query);
        List<Commande> commandes = new ArrayList<>();
        commandes = commandeQuery.getResultList();
        SearchCommande searchCommande = new SearchCommande(id, reference, utilisateur, prixTotal, etat, commandes);

        return searchCommande;
    }




}
