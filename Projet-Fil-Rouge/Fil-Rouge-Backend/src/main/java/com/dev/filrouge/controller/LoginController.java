package com.dev.filrouge.controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import com.dev.filrouge.model.User;
import com.dev.filrouge.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepo ur;

    @PostMapping
    public void createUser(@RequestBody Map<String, String> action) {
        ur.save(new User(action.get("login"), passwordEncoder.encode(action.get("mdp")), action.get("name"), action.get("role")));
    }

    @RequestMapping(value="user", method=RequestMethod.GET)
    public User getConnectedUser(Principal principal) {
        if (principal != null) {
            return ur.findByName(principal.getName());
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