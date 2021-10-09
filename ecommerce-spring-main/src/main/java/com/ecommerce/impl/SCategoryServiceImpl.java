package com.ecommerce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.CategoryDao;
import com.ecommerce.dao.SCategoryDao;
import com.ecommerce.dao.UserDao;
import com.ecommerce.modal.Category;
import com.ecommerce.modal.SCategory;
import com.ecommerce.modal.User;
import com.ecommerce.service.SCategoryService;

@Transactional
@Component
public class SCategoryServiceImpl implements SCategoryService {
	@Autowired
	private CategoryDao categoryDao;

	@Autowired
	private SCategoryDao scategoryDao;

	@Override
	public SCategory addSCategoryToCategory(SCategory scategory, long idCategory) {
		Category category = categoryDao.findById(idCategory).orElse(null);
		category.addSCategoryToCategory(scategory);
		return scategoryDao.save(scategory);
	}

	@Override
	public SCategory editSCategory(SCategory scategory, long id) {
		SCategory existsCategory = scategoryDao.findById(id).orElse(null);
		existsCategory.setName(scategory.getName());
		return scategoryDao.save(existsCategory);
	}

	@Override
	public SCategory findSCategoryById(long id) {
		return scategoryDao.findById(id).orElse(null);

	}

	@Override
	public void deleteSCategory(long id) {
		scategoryDao.deleteById(id);
		
	}

	@Override
	public List<SCategory> findAllSCategories() {
		return scategoryDao.findAll();

	}

	@Override
	public List<SCategory> findSCategoriesForCategory(long id) {
		Category category = categoryDao.findById(id).orElse(null);
		return category.getSouscategories();
	}

}
