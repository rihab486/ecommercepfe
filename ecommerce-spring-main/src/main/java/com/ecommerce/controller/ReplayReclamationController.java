package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.modal.ReplayReclamation;
import com.ecommerce.service.ReplayReclamationService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins ="*")
public class ReplayReclamationController {
	@Autowired
	private ReplayReclamationService replayreclamationservice;
	
	@PostMapping("/addReplayReclamationToReclamation/{idComment}")
	ReplayReclamation addReplayReclamationToReclamation(@RequestBody ReplayReclamation rreclamation, @PathVariable long idComment) {
		return replayreclamationservice.addReplayReclamationToReclamation(rreclamation, idComment);
	}
	
	@GetMapping("/findReplayReclamationById/{id}")
	ReplayReclamation findReplayReclamationById(@PathVariable long id) {
		return replayreclamationservice.findReplayReclamationById(id);
	}
	
	@DeleteMapping("/deleteReplayReclamation/{id}")
	void deleteReplayReclamation(@PathVariable long id) {
		replayreclamationservice.deleteReplayReclamation(id);
	}
	@GetMapping("/findReplayReclamationsForReclamation/{idComment}")
	List<ReplayReclamation> findReplayReclamationsForReclamation(@PathVariable long idComment) {
		return replayreclamationservice.findReplayReclamationsForReclamation(idComment);
	}
	@GetMapping("/findAllReplayReclamation")
	List<ReplayReclamation> findAllReplayReclamation() {
		return replayreclamationservice.findAllReplayReclamation();
	}
}
