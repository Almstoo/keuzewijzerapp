package com.lunetzorg.keuzewijzer.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.lunetzorg.keuzewijzer.entities.AlarmToolEntity;
import com.lunetzorg.keuzewijzer.entities.SignaalToolEntity;
import com.lunetzorg.keuzewijzer.entities.ToolEntity;
import com.lunetzorg.keuzewijzer.services.AlarmToolService;

@CrossOrigin(origins="http://localhost:4200")
@RestController

public class ToolAlarmRestController {
	@Autowired
	private AlarmToolService alarmToolService;

	
	@GetMapping("/users/{username}/alarmTools")
	public List<AlarmToolEntity> getAllAlarmTools(@PathVariable String username) {
		List<AlarmToolEntity> tools = alarmToolService.listAll();
		return tools;
	}
	
	@GetMapping("/users/{username}/findByLastq_alarm/{lastq}")
	public List<AlarmToolEntity> getAllLastqTools(@PathVariable String username, @PathVariable String lastq ) {
		List<AlarmToolEntity> tools = alarmToolService.findByLastq(lastq);
		return tools;
	}

}
