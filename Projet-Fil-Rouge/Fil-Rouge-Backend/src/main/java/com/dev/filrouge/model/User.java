package com.dev.filrouge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "user_")
@SequenceGenerator(name = "seq_user_id")
public class User {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_user_id")
	Long id;
	@Column
	String login;
	@Column
	String password;
	@Column
	String name;
	@Column
	String role;

	public User() {

	}

	public User(String login, String password, String name) {
		super();
		this.login = login;
		this.password = password;
		this.name = name;
	}
	
	public User(String login, String password, String name, String role) {
		super();
		this.login = login;
		this.password = password;
		this.name = name;
		this.role = role;
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

	@Override
	public String toString() {
		return "User [id=" + id + ", login=" + login + ", password=" + password + ", name=" + name + "]";
	}

}