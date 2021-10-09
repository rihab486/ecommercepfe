package com.ecommerce.service;

import java.util.List;

import com.ecommerce.modal.Product;
import com.ecommerce.modal.Reclamation;
import com.ecommerce.modal.Tag;
import com.ecommerce.modal.User;

public interface ReclamationService {
	Reclamation addReclamationToUser(Reclamation reclamation,long idUser);
	
	void deleteReclamation(long id);

	List<Reclamation> findReclamationsForUser(long idReclamation);
	
	 Reclamation findReclamationById(long id);
	 
	 List<Reclamation> findAllReclamations();

	void removeFromReclamation(long idReclamation,long idUser);
	
	Reclamation findByReclamationName(String name);

	 

}
