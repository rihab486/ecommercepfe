package com.ecommerce.service;

import java.util.List;

import com.ecommerce.modal.SCategory;


public interface SCategoryService {
	
    SCategory addSCategoryToCategory(SCategory  scategory, long idCategory);
	
    SCategory editSCategory(SCategory  scategory, long id);
	
    SCategory findSCategoryById(long id);
	
	void deleteSCategory(long id);
	
	List<SCategory > findAllSCategories();
	
	List<SCategory > findSCategoriesForCategory(long id);

}
