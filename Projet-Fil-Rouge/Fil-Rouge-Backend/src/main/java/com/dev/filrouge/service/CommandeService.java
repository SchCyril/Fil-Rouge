package com.dev.filrouge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
=======
import com.dev.filrouge.model.Commande;
>>>>>>> ee439a323e5a484ed672bf0062671def5268caa2
import com.dev.filrouge.repo.CommandeRepo;

@Service
public class CommandeService {
<<<<<<< HEAD
	
	@Autowired
	public CommandeRepo commandeRepository;

}
=======
    
    @Autowired
    public CommandeRepo commandeRepository;

    public void save(Commande commande) {
    	commandeRepository.save(commande);
    }
	public void create(Commande commande) {
		commandeRepository.save(commande);
	}	
    
}
>>>>>>> ee439a323e5a484ed672bf0062671def5268caa2
