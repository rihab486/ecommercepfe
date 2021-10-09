package com.ecommerce.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.CategoryDao;
import com.ecommerce.dao.ProductDao;
import com.ecommerce.dao.SCategoryDao;
import com.ecommerce.modal.SCategory;
import com.ecommerce.modal.Category;
import com.ecommerce.modal.Product;
import com.ecommerce.service.ProductService;

@Transactional
@Component
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;

	@Autowired
	private SCategoryDao scategoryDao;


	@Override
	public Product editProduct(Product product, long id) {
		Product existProduct = productDao.findById(id).orElse(null);
		existProduct.setName(product.getName());
		existProduct.setDescription(product.getDescription());
		existProduct.setUrl(product.getUrl());
		existProduct.setPrice(product.getPrice());
		existProduct.setdatecmd(new Date());
		existProduct.setQuantity(product.getQuantity());
		existProduct.setCouleur(product.getCouleur());
		existProduct.setTaille(product.getTaille());
		existProduct.setMarque(product.getMarque());
		existProduct.setStock(product.getStock());
		return productDao.save(existProduct);
	}

	@Override
	public Product findProductById(long id) {
		return productDao.findById(id).orElse(null);
	}

	@Override
	public void deleteProduct(long id) {
		productDao.deleteById(id);
	}

	@Override
	public List<Product> findAllProducts() {
		return productDao.findAll();
	}
	@Override
	public Product getProduct(Long id) {
		return productDao.findById(id).orElse(null);
	}

	@Override
	public List<Product> findProductsForSCategory(long id) {
		SCategory scategory = scategoryDao.findById(id).orElse(null);
		return scategory.getProducts();	
	}

	@Override
	public Product addProductToSCategory(Product product, long idSCategory) {
		SCategory scategory = scategoryDao.findById(idSCategory).orElse(null);
		product.setdatecmd(new Date());
		scategory.addProductToSCategory(product);
		return productDao.save(product);
	}

}
