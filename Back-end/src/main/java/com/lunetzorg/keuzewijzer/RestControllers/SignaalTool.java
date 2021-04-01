package com.lunetzorg.keuzewijzer.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.lunetzorg.keuzewijzer.entities.SignaalToolEntity;
import com.lunetzorg.keuzewijzer.services.SignaalToolService;



@CrossOrigin(origins="http://localhost:4200")
@RestController

public class SignaalTool {
	@Autowired
	private SignaalToolService signaalToolService;
	
	@GetMapping("/users/{username}/signaalTools")
	public List<SignaalToolEntity> getAllSignaalTools(@PathVariable String username) {
		List<SignaalToolEntity> tools = signaalToolService.listAll();
		return tools;
	}
	
	@GetMapping("/users/{username}/findByLastq/{lastq}")
	public List<SignaalToolEntity> getAllLastqTools(@PathVariable String username, @PathVariable String lastq ) {
		List<SignaalToolEntity> tools = signaalToolService.findByLastq(lastq);
//		System.out.println(lastq);
		return tools;
	}


}
