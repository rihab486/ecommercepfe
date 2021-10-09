package com.ecommerce.modal;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "users",
               uniqueConstraints = { 
		@UniqueConstraint(columnNames = "username"),
		@UniqueConstraint(columnNames = "email") 
	})

public class User {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
     @NotBlank
   	@Size(max = 20)
	 private String username;
		
	@NotBlank
	@Size(max = 120)
	 private String password;
	 
	 @NotBlank
	 @Size(max = 50)
	 @Email
	 private String email;   
	 private String adresse ;
	 private String ville ;
	 private Double phone ;  
	 private Double codepostal ;
	
	
	 @JsonProperty(access = Access.AUTO)
	 @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
	 private List<Category> categories;
	 
	 @JsonProperty(access = Access.AUTO)
	 @OneToMany(cascade = CascadeType.MERGE, mappedBy = "user")
	 private List<Cart> carts;
	 
	 @JsonProperty(access = Access.AUTO)
	 @OneToMany(cascade = CascadeType.MERGE, mappedBy = "user")
	 private List<Reclamation> reclamations;


	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
					joinColumns = @JoinColumn(name = "user_id"), 
					inverseJoinColumns = @JoinColumn(name = "role_id"))
	 		
	 private Set<Role> roles = new HashSet<>();
	

	
	public User() {
		super();
	}
	public User(String username, String email, String password, String adresse,String ville,Double phone, Double codepostal,  List<Category> categories, List<Cart> carts,  List<Reclamation> reclamations) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.adresse = adresse ;
		this.ville = ville ;
		this.phone = phone ;
		this.codepostal = codepostal ;
		this.categories = categories;
		this.carts = carts;
		this.reclamations = reclamations;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}
	
    public void setEmail(String email) {
		this.email = email;
		
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public Double getPhone() {
		return phone;
	}
	public void setPhone(Double phone) {
		this.phone = phone;
	}
	public Double getCodepostal() {
		return codepostal;
	}
	public void setCodepostal(Double codepostal) {
		this.codepostal = codepostal;
	}
	public List<Category> getCategories() {
		return categories;
	}
	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}
	
	public List<Cart> getCarts() {
		return carts;
	}

	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	

	public List<Reclamation> getReclamations() {
		return reclamations;
	}
	public void setReclamations(List<Reclamation> reclamations) {
		this.reclamations = reclamations;
	}
	public void addCategoryToUser(Category category) {
		if (getCategories()==null) {
			this.categories = new ArrayList<>();
		}
		getCategories().add(category);
		category.setUser(this);
	}
   
	public void addCartToUser(Cart cart) {
		if(getCarts()==null) {
			this.carts = new ArrayList<>();	
		}
		getCarts().add(cart);
		cart.setUser(this);
	}
	public void addReclamationToUser(Reclamation recl) {
		if(getReclamations()==null) {
			this.carts = new ArrayList<>();	
		}
		getReclamations().add(recl);
		recl.setUser(this);
	}
	public void removeFromCart(Cart cart) {
		if (getCarts()!=null) {
			getCarts().remove(cart);
		}
	}

	 
}
