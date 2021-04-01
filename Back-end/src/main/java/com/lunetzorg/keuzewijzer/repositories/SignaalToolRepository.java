package com.lunetzorg.keuzewijzer.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lunetzorg.keuzewijzer.entities.SignaalToolEntity;


public interface SignaalToolRepository extends JpaRepository<SignaalToolEntity, Long>{
	List<SignaalToolEntity> findByLastq(String lastq);

}
