package com.dev.filrouge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.dev.filrouge.model.Utilisateur;
import com.dev.filrouge.repo.UtilisateurRepo;
@Component
public class AuthentificationService implements UserDetailsService {

	@Autowired
	private UtilisateurRepo ur;

	@Override
	public UserDetails loadUserByUsername(final String username) {
		Utilisateur user = null;
		try {
			user = ur.findByEmail(username);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (user != null) {
			List<GrantedAuthority> rules = this.getUserCredentials(user);
			return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), rules);
		}
		throw new UsernameNotFoundException("username.not.found");
	}

	public List<GrantedAuthority> getUserCredentials(Utilisateur user){
        return AuthorityUtils.createAuthorityList(user.getRole());    
    }
}