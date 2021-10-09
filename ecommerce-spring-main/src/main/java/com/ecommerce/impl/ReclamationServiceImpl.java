package com.ecommerce.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.CartDao;
import com.ecommerce.dao.ReclamationDao;
import com.ecommerce.dao.UserDao;
import com.ecommerce.modal.Cart;
import com.ecommerce.modal.Reclamation;
import com.ecommerce.modal.User;
import com.ecommerce.service.ReclamationService;
@Transactional
@Component
public class ReclamationServiceImpl implements ReclamationService {

	@Autowired
	private ReclamationDao reclamationDao;
	
	@Autowired
	private UserDao userDao;
	@Override
	public Reclamation addReclamationToUser(Reclamation reclamation, long idUser) {
		User user = userDao.findById(idUser).orElse(null);
		reclamation.setDater(new Date());
		user.addReclamationToUser(reclamation);
		return reclamationDao.save(reclamation);
	}

	@Override
	public void deleteReclamation(long id) {
		reclamationDao.deleteById(id);
		
	}

	@Override
	public List<Reclamation> findReclamationsForUser(long idReclamation) {
		User user = userDao.findById(idReclamation).orElse(null);
		return user.getReclamations();
	}

	@Override
	public Reclamation findReclamationById(long id) {
		return reclamationDao.findById(id).orElse(null);
	}

	@Override
	public void removeFromReclamation(long idReclamation, long idUser) {
		User user = userDao.findById(idUser).orElse(null);
		Reclamation recl = reclamationDao.findById(idReclamation).orElse(null);
		
		reclamationDao.delete(recl);		
	}

	@Override
	public Reclamation findByReclamationName(String name) {
		Optional<Reclamation> recl = reclamationDao.findByName(name);
		if (recl.isPresent()) {
			Reclamation recls = recl.get();
			return recls;
		}
		return null;
	}

	@Override
	public List<Reclamation> findAllReclamations() {
		return reclamationDao.findAll();

	}

}
