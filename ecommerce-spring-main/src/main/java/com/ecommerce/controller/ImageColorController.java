package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.modal.Comment;
import com.ecommerce.modal.ImageColor;
import com.ecommerce.service.CommentService;
import com.ecommerce.service.ImageColorService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins ="*")
public class ImageColorController {
	@Autowired
	private ImageColorService imagecolorService;
	
	@PostMapping("/addImageColorToProduct/{idProduct}")
	ImageColor addImageColorToProduct(@RequestBody ImageColor imagec, @PathVariable long idProduct) {
		return imagecolorService.addImageColorToProduct(imagec, idProduct);
	}
	
	@GetMapping("/findAllImageColor")
	List<ImageColor> findAllImageColor() {
		return imagecolorService.findAllImageColor();
	}
	@GetMapping("/findImageColorById/{id}")
	ImageColor findImageColorById(@PathVariable long id) {
		return imagecolorService.findImageColorById(id);
	}
	
	@GetMapping("/findImageColorsForProduct/{idProduct}")
	List<ImageColor> findImageColorsForProduct(@PathVariable long idProduct) {
		return imagecolorService.findImageColorsForProduct(idProduct);
	}

}
