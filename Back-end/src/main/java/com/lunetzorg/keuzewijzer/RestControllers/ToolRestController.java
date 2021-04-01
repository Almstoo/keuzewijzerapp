package com.lunetzorg.keuzewijzer.RestControllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.lunetzorg.keuzewijzer.entities.ToolEntity;
import com.lunetzorg.keuzewijzer.services.ToolService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ToolRestController {

	@Autowired
	private ToolService toolService;

	@GetMapping("/users/{username}/tools")
	public List<ToolEntity> getAllHardwareTool(@PathVariable String username) {
		List<ToolEntity> tools = toolService.listAll();
		return tools;
	}
	
	@GetMapping("/users/{username}/tools/{id}")
	public ToolEntity getTool (@PathVariable String username, @PathVariable long id) {
		ToolEntity tool =toolService.get(id);
		return tool;
	}

	@DeleteMapping("/users/{username}/tools/{id}")
	public ResponseEntity<Void> deleteTool(@PathVariable String username, @PathVariable long id) {
		toolService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/tools/{id}")
	public ResponseEntity<ToolEntity> updateTodo( @PathVariable String username, @PathVariable long id, @RequestBody ToolEntity tool){
		
		ToolEntity toolUpdated = toolService.save(tool);
		return new ResponseEntity<ToolEntity>(toolUpdated, HttpStatus.OK);
	}

	@PostMapping("/users/{username}/tools")
	public ResponseEntity<Void> createTool(@PathVariable String username, @RequestBody ToolEntity tool){
		
		ToolEntity createdTool = toolService.save(tool);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTool.getId()).toUri();

		return ResponseEntity.created(uri).build();
	}
}
