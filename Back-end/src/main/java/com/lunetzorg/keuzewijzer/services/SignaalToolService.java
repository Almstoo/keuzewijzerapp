package com.lunetzorg.keuzewijzer.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lunetzorg.keuzewijzer.entities.SignaalToolEntity;
import com.lunetzorg.keuzewijzer.repositories.SignaalToolRepository;



@Service
public class SignaalToolService {
	
	@Autowired
	private SignaalToolRepository repo;
	
	
	public List<SignaalToolEntity> listAll(){
		return repo.findAll();
	}
	public List<SignaalToolEntity> findByLastq(String lastq){
		return repo.findByLastq(lastq);
	}
	
	

}
