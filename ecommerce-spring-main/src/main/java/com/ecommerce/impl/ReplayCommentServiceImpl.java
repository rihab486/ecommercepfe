package com.ecommerce.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.CommentDao;
import com.ecommerce.dao.ReplayCommentDao;
import com.ecommerce.modal.Comment;
import com.ecommerce.modal.ReplayComment;
import com.ecommerce.service.ReplayCommentService;
@Transactional
@Component
public class ReplayCommentServiceImpl implements ReplayCommentService {
	@Autowired
	private CommentDao commentDao;
	
	@Autowired
	private ReplayCommentDao replaycommentDao;

	@Override
	public ReplayComment addReplayCommentToComment(ReplayComment rcomment, long idComment) {
		Comment comment = commentDao.findById(idComment).orElse(null);
		rcomment.setAddedAt(new Date());
		comment. addReplayCommentToComment(rcomment);
		return replaycommentDao.save(rcomment);
	}

	@Override
	public ReplayComment findReplayCommentById(long id) {
		return replaycommentDao.findById(id).orElse(null);
	}

	@Override
	public void deleteReplayComment(long id) {
		replaycommentDao.deleteById(id);
		
	}

	@Override
	public List<ReplayComment> findReplayCommentsForComment(long idComment) {
		Comment comment = commentDao.findById(idComment).orElse(null);      
		return comment.getReplaycomments();
	}

	@Override
	public List<ReplayComment> findAllReplayComments() {
		return replaycommentDao.findAll();

	}

}
