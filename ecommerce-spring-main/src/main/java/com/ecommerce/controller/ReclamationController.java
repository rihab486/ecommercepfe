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

import com.ecommerce.modal.Cart;
import com.ecommerce.modal.Product;
import com.ecommerce.modal.Reclamation;
import com.ecommerce.service.CartService;
import com.ecommerce.service.ReclamationService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins ="*")
public class ReclamationController {
	@Autowired
	private ReclamationService reclamationService;
	
	@PostMapping("/addReclamationToUser/{idUser}")
	Reclamation addReclamationToUser(@RequestBody Reclamation reclamation, @PathVariable long idUser) {
		return reclamationService.addReclamationToUser(reclamation, idUser);
	}
	@DeleteMapping("/deleteReclamation/{id}")
	void deleteReclamation(@PathVariable long id) {
		reclamationService.deleteReclamation(id);
	}
	
	@GetMapping("/findReclamationsForUser/{idUser}")
	List<Reclamation> findReclamationsForUser(@PathVariable long idUser) {
		return reclamationService.findReclamationsForUser(idUser);
	}
	@GetMapping("/findReclamationById/{id}")
	Reclamation findReclamationById(@PathVariable long id) {
		return reclamationService.findReclamationById(id);
	}
	@DeleteMapping("/removeFromReclamation/{idReclamation}/{idUser}")
	void removeFromReclamation(@PathVariable long idReclamation, @PathVariable long idUser) {
		reclamationService.removeFromReclamation(idReclamation, idUser);
	}
	
	@GetMapping("/findByReclamationName/{name}")
	Reclamation findByReclamationName(@PathVariable String name) {
		return reclamationService.findByReclamationName(name);
	}

	@GetMapping("/findAllReclamations")
	List<Reclamation> findAllReclamations() {
		return reclamationService.findAllReclamations();
	}

	

}
