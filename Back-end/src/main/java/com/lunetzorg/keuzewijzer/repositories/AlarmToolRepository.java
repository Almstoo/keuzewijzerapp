package com.lunetzorg.keuzewijzer.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lunetzorg.keuzewijzer.entities.AlarmToolEntity;

public interface AlarmToolRepository extends JpaRepository<AlarmToolEntity, Long>{

	List<AlarmToolEntity> findByLastq(String lastq);

}
