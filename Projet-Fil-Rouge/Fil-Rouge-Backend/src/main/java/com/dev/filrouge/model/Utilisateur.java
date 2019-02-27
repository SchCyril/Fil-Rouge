package com.dev.filrouge.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "user_")
@SequenceGenerator(name = "seq_user_id")
public class Utilisateur {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_user_id")
	Long id;
	@Column
	String numClient;
	@Column
	String login;
	@Column
	String password;
	@Column
	String role;
	@Column
	String name;
	@Column
	String prenom;
	@Column
	String adresse;
	@Column
	String telephone;
	@Column
	String email;
	@Column
	Date datenaissance;
	@OneToMany
	List<Commande> commandes = new ArrayList<>();

	public Utilisateur() {

	}

	// public Utilisateur(String login, String password, String name) {
	// super();
	// this.login = login;
	// this.password = password;
	// this.name = name;
	// }

	public Utilisateur(String login, String password, String name, String role) {
		super();
		this.login = login;
		this.password = password;
		this.name = name;
		this.role = role;
	}

	public Utilisateur(String login, String password, String role, String name, String prenom, String adresse,
			String telephone, String email, Date datenaissance) {
		this.login = login;
		this.password = password;
		this.role = role;
		this.name = name;
		this.prenom = prenom;
		this.adresse = adresse;
		this.telephone = telephone;
		this.email = email;
		this.datenaissance = datenaissance;
	}

	public String getRole() {
		return role;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumClient() {
		return this.numClient;
	}

	public void setNumClient(String numClient) {
		this.numClient = numClient;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPrenom() {
		return this.prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getAdresse() {
		return this.adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getTelephone() {
		return this.telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDatenaissance() {
		return this.datenaissance;
	}

	public void setDatenaissance(Date datenaissance) {
		this.datenaissance = datenaissance;
	}

	public List<Commande> getCommandes() {
		return this.commandes;
	}

	public void setCommandes(List<Commande> commandes) {
		this.commandes = commandes;
	}

	@Override
	public String toString() {
		return "{" + " id='" + getId() + "'" + ", numClient='" + getNumClient() + "'" + ", login='" + getLogin() + "'"
				+ ", password='" + getPassword() + "'" + ", role='" + getRole() + "'" + ", name='" + getName() + "'"
				+ ", prenom='" + getPrenom() + "'" + ", adresse='" + getAdresse() + "'" + ", telephone='"
				+ getTelephone() + "'" + ", email='" + getEmail() + "'" + ", datenaissance='" + getDatenaissance() + "'"
				+ ", commandes='" + getCommandes() + "'" + "}";
	}

}