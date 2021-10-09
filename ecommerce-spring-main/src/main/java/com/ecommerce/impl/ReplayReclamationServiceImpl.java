package com.ecommerce.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.CommentDao;
import com.ecommerce.dao.ReclamationDao;
import com.ecommerce.dao.ReplayCommentDao;
import com.ecommerce.dao.ReplayReclamationDao;
import com.ecommerce.modal.Comment;
import com.ecommerce.modal.Reclamation;
import com.ecommerce.modal.ReplayReclamation;
import com.ecommerce.service.ReplayReclamationService;
@Transactional
@Component
public class ReplayReclamationServiceImpl implements ReplayReclamationService {

	@Autowired
	private ReclamationDao  reclamationDao;
	
	@Autowired
	private ReplayReclamationDao replayreclamationDao;
	@Override
	public ReplayReclamation addReplayReclamationToReclamation(ReplayReclamation rreclamation, long idComment) {
		Reclamation reclamation = reclamationDao.findById(idComment).orElse(null);
		rreclamation.setDater(new Date());
		reclamation. addReplayreclamationToReclamation(rreclamation);
		return replayreclamationDao.save(rreclamation);
	}

	@Override
	public ReplayReclamation findReplayReclamationById(long id) {
		return replayreclamationDao.findById(id).orElse(null);

	}

	@Override
	public void deleteReplayReclamation(long id) {
		replayreclamationDao.deleteById(id);
		}
	
	@Override
	public List<ReplayReclamation> findReplayReclamationsForReclamation(long idComment) {
		Reclamation reclamation = reclamationDao.findById(idComment).orElse(null);      
		return reclamation.getReplayreclamations();
	}

	@Override
	public List<ReplayReclamation> findAllReplayReclamation() {
		return replayreclamationDao.findAll();

	}

}
