package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.modal.SCategory;
import com.ecommerce.service.SCategoryService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins ="*")
public class SCategoryController {

	@Autowired
	private SCategoryService scategoryService;
	@PostMapping("/addSCategoryToCategory/{idCategory}")
	SCategory addSCategoryToCategory(@RequestBody SCategory scategory, @PathVariable long idCategory) {
		return scategoryService.addSCategoryToCategory(scategory, idCategory);
	}

	@PutMapping("/editSCategory/{id}")
	SCategory editSCategory(@RequestBody SCategory scategory, @PathVariable long id) {
		return scategoryService.editSCategory(scategory, id);
	}

	@GetMapping("/findSCategoryById/{id}")
	SCategory findSCategoryById(@PathVariable long id) {
		return scategoryService.findSCategoryById(id);
	}

	@DeleteMapping("/deleteSCategory/{id}")
	void deleteSCategory(@PathVariable long id) {
		scategoryService.deleteSCategory(id);
	}

	@GetMapping("/findAllSCategories")
	List<SCategory> findAllSCategories() {
		return scategoryService.findAllSCategories();
	}

	@GetMapping("/findSCategoriesForCategory/{id}")
	List<SCategory> findSCategoriesForCategory(@PathVariable long id) {
		return scategoryService.findSCategoriesForCategory(id);
	}


}
