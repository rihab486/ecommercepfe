package com.ecommerce.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.CommentDao;
import com.ecommerce.dao.ImageColorDao;
import com.ecommerce.dao.ProductDao;
import com.ecommerce.modal.ImageColor;
import com.ecommerce.modal.Product;
import com.ecommerce.service.CommentService;
import com.ecommerce.service.ImageColorService;

@Transactional
@Component
public class ImageColorServiceImpl implements ImageColorService {
	@Autowired
	private ImageColorDao imagcDao;
	
	@Autowired
	private ProductDao productDao;
	@Override
	public ImageColor addImageColorToProduct(ImageColor imagec, long idProduct) {
		Product product = productDao.findById(idProduct).orElse(null);
		product.addImageColorToProduct(imagec);
		return imagcDao.save(imagec);
	}

	@Override
	public List<ImageColor> findAllImageColor() {
		return imagcDao.findAll();
	}

	@Override
	public ImageColor findImageColorById(long id) {
		return imagcDao.findById(id).orElse(null);

	}

	@Override
	public List<ImageColor> findImageColorsForProduct(long idProduct) {
		Product product = productDao.findById(idProduct).orElse(null);      
		return product. getImagecolor();
	}

}
