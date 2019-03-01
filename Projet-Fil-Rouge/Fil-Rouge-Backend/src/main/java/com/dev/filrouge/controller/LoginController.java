package com.dev.filrouge.controller;

import java.security.Principal;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.model.Utilisateur;
import com.dev.filrouge.service.UtilisateurService;



@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UtilisateurService utilisateurService;

    @PostMapping
    public void createUser(@RequestBody Map<String, String> action) {
        utilisateurService.save(new Utilisateur(action.get("login"), passwordEncoder.encode(action.get("mdp")), action.get("name"), action.get("role")));
    }

    @RequestMapping(value="user", method=RequestMethod.GET)
    public Utilisateur getConnectedUser(Principal principal) {
        if (principal != null) {
            return utilisateurService.findByName(principal.getName());
        }
        return null;
    }
    
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public ResponseEntity<?> getMethodName() {
        System.out.println("AUTORITY");
        return ResponseEntity.ok().build();
    }
    
}