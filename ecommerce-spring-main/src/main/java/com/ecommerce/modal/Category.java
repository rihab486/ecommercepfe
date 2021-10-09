package com.ecommerce.modal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "categoires")
public class Category {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 private String name;
	 
	 @JsonBackReference(value = "user")
	 @ManyToOne
	 private User user;
	 
	 @JsonProperty(access = Access.AUTO)
	 @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
	 private List<SCategory> souscategories;
	 
	 

	public Category() {
		super();
	}

	public Category(String name, User user, List<SCategory> souscategories) {
		super();
		this.name = name;
		this.user = user;
		this.souscategories = souscategories;
	}

	public Category(Long id, String name, User user, List<SCategory> souscategories) {
		super();
		this.id = id;
		this.name = name;
		this.user = user;
		this.souscategories = souscategories;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	public List<SCategory> getSouscategories() {
		return souscategories;
	}

	public void setSouscategories(List<SCategory> souscategories) {
		this.souscategories = souscategories;
	}

	public void addSCategoryToCategory(SCategory souscategorie) {
		if (getSouscategories()==null) {
			this. souscategories = new ArrayList<>();
		}
		getSouscategories().add(souscategorie);
		souscategorie.setCategory(this);
	}
	 
}
