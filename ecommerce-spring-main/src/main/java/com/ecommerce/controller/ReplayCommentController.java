package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.modal.ReplayComment;
import com.ecommerce.service.ReplayCommentService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins ="*")
public class ReplayCommentController {
	@Autowired
	private ReplayCommentService replaycommentService;
	
	@PostMapping("/addReplayCommentToComment/{idComment}")
 	ReplayComment addReplayCommentToComment(@RequestBody ReplayComment rcomment, @PathVariable long idComment) {
		return replaycommentService.addReplayCommentToComment(rcomment, idComment);
	}
	
	@GetMapping("/findReplayCommentById/{id}")
	ReplayComment findReplayCommentById(@PathVariable long id) {
		return replaycommentService.findReplayCommentById(id);
	}
	
	@DeleteMapping("/deleteReplayComment/{id}")
	void deleteReplayComment(@PathVariable long id) {
		replaycommentService.deleteReplayComment(id);
	}
	@GetMapping("/findReplayCommentsForComment/{idComment}")
	List<ReplayComment> findReplayCommentsForComment(@PathVariable long idComment) {
		return replaycommentService.findReplayCommentsForComment(idComment);
	}
	@GetMapping("/findAllReplayComments")
	List<ReplayComment> findAllReplayComments() {
		return replaycommentService.findAllReplayComments();
	}
}
