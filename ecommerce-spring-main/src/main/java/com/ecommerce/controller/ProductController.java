package com.ecommerce.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.dao.ProductDao;
import com.ecommerce.modal.Product;
import com.ecommerce.service.ProductService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins ="*")
public class ProductController {

	@Autowired
	private ProductService productService;

	@Autowired
	private ProductDao productDao;

	@PostMapping("/addProductToSCategory/{idSCategory}")
	Product addProductToSCategory(@RequestBody Product product, @PathVariable long idSCategory) {
		return productService.addProductToSCategory(product,idSCategory);
	}

	@PutMapping("/editProduct/{id}")
	Product editProduct(@RequestBody Product product, @PathVariable long id) {
		 return productService.editProduct(product, id);
	}

	@GetMapping("/findProductById/{id}")
	Product findProductById(@PathVariable long id) {
		return productService.findProductById(id);
	}

	@DeleteMapping("/deleteProduct/{id}")
	void deleteProduct(@PathVariable long id) {
		productService.deleteProduct(id);
	}

	@GetMapping("/findAllProducts")
	List<Product> findAllProducts() {
		return productService.findAllProducts();
	}

	@GetMapping("/findProductsForSCategory/{id}")
	List<Product> findProductsForSCategory(@PathVariable long id) {
		return productService.findProductsForSCategory(id);
	}

	@GetMapping("/findByName/{name}")
	List<Product> findByName(@PathVariable String name) {
		return productDao.findByName("%" + name + "%");
	}

}
