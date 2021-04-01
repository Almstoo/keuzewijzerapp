package com.lunetzorg.keuzewijzer.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lunetzorg.keuzewijzer.entities.ToolEntity;
import com.lunetzorg.keuzewijzer.repositories.ToolRepository;

@Service
public class ToolService {
	
	@Autowired
	private ToolRepository repo;
	
	public List<ToolEntity> listAll(){
		return repo.findAll();
	}
	
	public ToolEntity save (ToolEntity toolEntity) {
		return repo.save(toolEntity);
	}
	
	public ToolEntity get (long id) {
		return repo.findById(id).get();
	}
	
	public void delete(long id) {
		repo.deleteById(id);
	}

	
		
	
}
