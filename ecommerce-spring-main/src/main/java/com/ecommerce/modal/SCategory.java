package com.ecommerce.modal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "souscategories")
public class SCategory {
	      @Id
	     @GeneratedValue(strategy = GenerationType.IDENTITY)
	     private Long id;
	 
	    private String name;
	 
		@JsonBackReference(value = "category")
		@ManyToOne
		private Category category;

		 @JsonProperty(access = Access.WRITE_ONLY)
		 @OneToMany(cascade = CascadeType.ALL, mappedBy = "scategory")
		 private List<Product> products;

		public SCategory() {
			super();
		}

		public SCategory(Long id, String name, Category category, List<Product> products) {
			super();
			this.id = id;
			this.name = name;
			this.category = category;
			this.products = products;
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

		public Category getCategory() {
			return category;
		}

		public void setCategory(Category category) {
			this.category = category;
		}

		public List<Product> getProducts() {
			return products;
		}

		public void setProducts(List<Product> products) {
			this.products = products;
		}
		 
		public void addProductToSCategory(Product product) {
			if (getProducts()==null) {
				this. products = new ArrayList<>();
			}
			getProducts().add(product);
			product.setScategory(this);
		}

}
