package com.ecommerce.modal;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "carts")
public class Cart {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
    private String name;
    
    private Double price;
    
    private int quantity;
    
    private String addedby ;;
  
   
	private String url;
	  @Temporal(TemporalType.TIMESTAMP)
		private Date datecmd;
    
	@JsonBackReference(value = "user")
	@ManyToOne
    private User user;

	public Cart() {
		super();
	}

	public Cart(String name, Double price, int quantity, String pictureUrl,Date addedAt,String addedby, User user) {
		super();
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.url = pictureUrl;
		this.datecmd = addedAt;
		this.addedby= addedby;
		this.user = user;
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

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
	
	public Date getdatecmd() {
		return datecmd;
	}

	public void setdatecmd(Date addedAt) {
		this.datecmd = addedAt;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String pictureUrl) {
		this.url = pictureUrl;
	}
	

	public String getAddedby() {
		return addedby;
	}

	public void setAddedby(String addedby) {
		this.addedby = addedby;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
