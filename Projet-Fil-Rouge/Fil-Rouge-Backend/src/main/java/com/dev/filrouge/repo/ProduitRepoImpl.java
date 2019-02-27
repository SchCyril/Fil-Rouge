package com.dev.filrouge.repo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import com.dev.filrouge.model.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaContext;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@Repository
public class ProduitRepoImpl{
    
    private EntityManager em;
	
	@Autowired
	public void setJpaContext(JpaContext jpaContext) {
		this.em = jpaContext.getEntityManagerByManagedType(Produit.class);
    }
    
    public List<Produit> search(int pageNb, String name, String categorie, String sousCategorie, String prix, boolean active){

        CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Produit> query = builder.createQuery(Produit.class);
        Root<Produit> root = query.from(Produit.class);

        Predicate namePredicate = builder.and();
		Predicate categoriePredicate = builder.and();
		Predicate sousCategoriePredicate = builder.and();
		Predicate prixPredicate = builder.and();
        Predicate activePredicate = builder.and();
        
		if(!StringUtils.isEmpty(name)) {
			namePredicate = builder.like(builder.upper(root.get("name")), "%" + name.toUpperCase() + "%");
        }
        if(!StringUtils.isEmpty(categorie)) {
			categoriePredicate = builder.like(builder.upper(root.get("genre")),"%" + categorie.toUpperCase() + "%");
        }
        if(!StringUtils.isEmpty(sousCategorie)) {
			sousCategoriePredicate = builder.like(builder.upper(root.get("genre")),"%" + categorie.toUpperCase() + "%");
        }
        if(!StringUtils.isEmpty(prix)) {
			prixPredicate = builder.like(builder.upper(root.get("genre")),"%" + categorie.toUpperCase() + "%");
        }
        activePredicate = builder.isTrue(root.get("active"));

        query.where(builder.and(
            namePredicate,
            categoriePredicate,
            sousCategoriePredicate,
            prixPredicate,
            activePredicate
        ));

        TypedQuery<Produit> produitQuery = em.createQuery(query);
        produitQuery.setFirstResult(pageNb - 1 * 10);
        produitQuery.setMaxResults(10);

        return produitQuery.getResultList();
    }

}