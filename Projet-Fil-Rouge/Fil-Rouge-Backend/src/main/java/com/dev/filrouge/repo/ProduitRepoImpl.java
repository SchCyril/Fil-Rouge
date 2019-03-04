package com.dev.filrouge.repo;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import com.dev.filrouge.model.Produit;
import com.dev.filrouge.model.ProduitPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaContext;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@Repository
public class ProduitRepoImpl {

    private EntityManager em;

    @Autowired
    public void setJpaContext(JpaContext jpaContext) {
        this.em = jpaContext.getEntityManagerByManagedType(Produit.class);
    }

    public ProduitPage searchNotAdmin(int page, String name, String categorie, String sousCategorie, int maxResult) {

        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<Produit> query = builder.createQuery(Produit.class);
        Root<Produit> root = query.from(Produit.class);
        Predicate namePredicate = builder.and();
        Predicate categoriePredicate = builder.and();
        Predicate sousCategoriePredicate = builder.and();
        Predicate activePredicate = builder.and();

        if (!StringUtils.isEmpty(name)) {
            namePredicate = builder.like(builder.upper(root.get("nom")), "%" + name.toUpperCase() + "%");
        }
        if (!StringUtils.isEmpty(categorie)) {
            categoriePredicate = builder.like(builder.upper(root.get("categorie")),
                    "%" + categorie.toUpperCase() + "%");
        }
        if (!StringUtils.isEmpty(sousCategorie)) {
            sousCategoriePredicate = builder.like(builder.upper(root.get("sousCategorie")),
                    "%" + sousCategorie.toUpperCase() + "%");
        }
        activePredicate = builder.isTrue(root.get("actif"));

        query.where(builder.and(namePredicate, categoriePredicate, sousCategoriePredicate, activePredicate));

        TypedQuery<Produit> produitQuery = em.createQuery(query);
        int resultNb = produitQuery.getResultList().size();
        produitQuery.setFirstResult((page - 1) * maxResult);
        produitQuery.setMaxResults(maxResult);
        List<Produit> produits = new ArrayList<>();
        produits = produitQuery.getResultList();
        ProduitPage produitPage = new ProduitPage(resultNb, page, produits);

        return produitPage;
    }

    public ProduitPage searchAdmin(int page, String name, String categorie, String sousCategorie) {

        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<Produit> query = builder.createQuery(Produit.class);
        Root<Produit> root = query.from(Produit.class);
        Predicate namePredicate = builder.and();
        Predicate categoriePredicate = builder.and();
        Predicate sousCategoriePredicate = builder.and();

        if (!StringUtils.isEmpty(name)) {
            namePredicate = builder.like(builder.upper(root.get("nom")), "%" + name.toUpperCase() + "%");
        }
        if (!StringUtils.isEmpty(categorie)) {
            categoriePredicate = builder.like(builder.upper(root.get("categorie")),
                    "%" + categorie.toUpperCase() + "%");
        }
        if (!StringUtils.isEmpty(sousCategorie)) {
            sousCategoriePredicate = builder.like(builder.upper(root.get("sousCategorie")),
                    "%" + sousCategorie.toUpperCase() + "%");
        }

        query.where(builder.and(namePredicate, categoriePredicate, sousCategoriePredicate));

        TypedQuery<Produit> produitQuery = em.createQuery(query);
        int resultNb = produitQuery.getResultList().size();
        produitQuery.setFirstResult((page - 1) * 10);
        produitQuery.setMaxResults(10);
        List<Produit> produits = new ArrayList<>();
        produits = produitQuery.getResultList();
        ProduitPage produitPage = new ProduitPage(resultNb, page, produits);

        return produitPage;
    }

}