package com.ecommerce.modal;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;


@Entity
@Table(name="comments")
public class Comment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String title;

	@Lob
	@Column( length = 100000 )
	private String message;
	
	private String addedBy;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date addedAt;
	
	@JsonBackReference(value = "product")
	@ManyToOne
	private Product product;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "comment")
	private List<ReplayComment> replaycomments;

	public Comment() {
		super();
	}

	public Comment(String title, String message, String addedBy, Date addedAt, Product product,List<ReplayComment> replaycomments) {
		super();
		this.title = title;
		this.message = message;
		this.addedBy = addedBy;
		this.addedAt = addedAt;
		this.product = product;
	   this.replaycomments= replaycomments;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getAddedBy() {
		return addedBy;
	}

	public void setAddedBy(String addedBy) {
		this.addedBy = addedBy;
	}

	public Date getAddedAt() {
		return addedAt;
	}

	public void setAddedAt(Date addedAt) {
		this.addedAt = addedAt;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public List<ReplayComment> getReplaycomments() {
		return replaycomments;
	}

	public void setReplaycomments(List<ReplayComment> replaycomments) {
		this.replaycomments = replaycomments;
	}
	public void  addReplayCommentToComment(ReplayComment rcomment) {
		if (getReplaycomments() == null) {
			this.replaycomments = new ArrayList<>();
		}
		getReplaycomments().add(rcomment);
		rcomment.setComment(this);
	}
	
	
}