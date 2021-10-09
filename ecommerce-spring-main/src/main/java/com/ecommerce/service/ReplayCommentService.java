package com.ecommerce.service;

import java.util.List;

import com.ecommerce.modal.ReplayComment;

public interface ReplayCommentService {
   ReplayComment addReplayCommentToComment(ReplayComment rcomment, long idComment);
		
   ReplayComment findReplayCommentById(long id);
	
	void deleteReplayComment(long id);
	
	List<ReplayComment> findReplayCommentsForComment(long idComment);
	
	List<ReplayComment> findAllReplayComments();	
	

}
