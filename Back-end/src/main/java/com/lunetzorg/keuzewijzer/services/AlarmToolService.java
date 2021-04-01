package com.lunetzorg.keuzewijzer.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lunetzorg.keuzewijzer.entities.AlarmToolEntity;
import com.lunetzorg.keuzewijzer.repositories.AlarmToolRepository;



@Service
public class AlarmToolService {
	
	@Autowired
	private AlarmToolRepository repo;
	
	public List<AlarmToolEntity> listAll(){
		return repo.findAll();
	}

	public List<AlarmToolEntity> findByLastq(String lastq) {
		// TODO Auto-generated method stub
		return repo.findByLastq(lastq);
	}

}
