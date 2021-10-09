package com.ecommerce.service;

import java.util.List;

import com.ecommerce.modal.ReplayReclamation;


public interface ReplayReclamationService {
	
	ReplayReclamation addReplayReclamationToReclamation(ReplayReclamation rreclamation, long idComment);
	
	ReplayReclamation findReplayReclamationById(long id);
		
		void deleteReplayReclamation(long id);
		
		List<ReplayReclamation> findReplayReclamationsForReclamation(long idComment);
		
		List<ReplayReclamation> findAllReplayReclamation();	
		

}
