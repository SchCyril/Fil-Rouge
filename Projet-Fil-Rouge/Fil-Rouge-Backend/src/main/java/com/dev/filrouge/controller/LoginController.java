package com.dev.filrouge.controller;

import java.security.Principal;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public Utilisateur createUser(@RequestBody Utilisateur utilisateur) {
        System.out.println("*****CREATION UTILISATEUR********");
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

    @PostMapping(value = "update")
    public Utilisateur updateUser(@RequestBody Utilisateur utilisateur) {
        System.out.println("*****" + utilisateur.getPassword() + "********");
        if (utilisateur.getPassword() != null) {
            System.out.println("*****UPDATE AVEC CHANGMT MDP********");
            utilisateur.setPassword(passwordEncoder.encode(utilisateur.getPassword()));
            utilisateurService.save(utilisateur);
        } else {
            System.out.println("*****UPDATE SANS CHANGMT MDP********");
            utilisateur.setPassword(utilisateurService.findByEmail(utilisateur.getEmail()).getPassword());
            utilisateurService.save(utilisateur);
        }

        return utilisateur;
    }

    @RequestMapping(value = "user", method = RequestMethod.GET)
    public Utilisateur getConnectedUser(Principal principal) {
        System.out.println("*****DANS LA FONCTION********");
        if (principal != null) {
            System.out.println("*****PRINCIPAL NON NUL********");
            return utilisateurService.findByEmail(principal.getName());
        }
        System.out.println("*****NULL********");
        return null;
    }

    @PostMapping(value = "email")
    public Utilisateur getUserByEmail(@RequestBody String email) {
        System.out.println("*****GET USER BY EMAIL********");
        System.out.println(utilisateurService.findByEmail(email));
        return utilisateurService.findByEmail(email);
    }

    // @PreAuthorize("hasAuthority('ADMIN')")
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