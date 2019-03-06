package com.dev.filrouge.controller;

import java.security.Principal;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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

    // @PostMapping
    // public void createUser(@RequestBody Map<String, String> action) {
    // utilisateurService.save(new Utilisateur(action.get("login"),
    // passwordEncoder.encode(action.get("mdp")), action.get("name"),
    // action.get("role")));
    // }

    @PostMapping
    public Utilisateur createUser(@RequestBody Utilisateur utilisateur) {
        Utilisateur newUtilisateur = new Utilisateur(passwordEncoder.encode(utilisateur.getPassword()),
                utilisateur.getRole(), utilisateur.getName(), utilisateur.getPrenom(), utilisateur.getAdresse(),
                utilisateur.getTelephone(), utilisateur.getEmail(), utilisateur.getDatenaissance());
        utilisateurService.save(newUtilisateur);

        StringBuilder numClient = new StringBuilder();
        numClient.append(String.valueOf(newUtilisateur.getId()));
        int numClientLength = numClient.length();
        for (int i = 0; i < (5 - numClientLength); i++) {
            numClient.insert(0, "0");
        }
        newUtilisateur.setNumClient(numClient.toString());
        utilisateurService.save(newUtilisateur);

        return newUtilisateur;
    }

    @RequestMapping(value = "user", method = RequestMethod.GET)
    public Utilisateur getConnectedUser(Principal principal) {
        if (principal != null) {
            return utilisateurService.findByEmail(principal.getName());
        }
        return null;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public ResponseEntity<?> getMethodName() {
        System.out.println("AUTORITY");
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "logMeOut", method = RequestMethod.GET)
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();
        if (request.isRequestedSessionIdValid() && session != null) {
            session.invalidate();
        }

        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookie.setMaxAge(0);
                cookie.setValue(null);
                cookie.setPath("/");
                response.addCookie(cookie);
            }
        }
    }

}