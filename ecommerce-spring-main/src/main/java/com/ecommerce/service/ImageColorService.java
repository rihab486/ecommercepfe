package com.ecommerce.service;

import java.util.List;

import com.ecommerce.modal.ImageColor;

public interface ImageColorService {
  ImageColor addImageColorToProduct(ImageColor imagec, long idProduct);

	List<ImageColor> findAllImageColor();
	
	ImageColor findImageColorById(long id);
	
	
	List<ImageColor> findImageColorsForProduct(long idProduct);
}
