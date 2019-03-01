package com.dev.filrouge.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.dev.filrouge.repo.CommandeRepo;

public class CommandeService {
	
	@Autowired
	public CommandeRepo commandeRepository;

}
