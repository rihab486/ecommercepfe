package com.ecommerce.modal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date datecmd;
	private String url;
	
	private String name;
	private String description;
	private Double price;
	private Integer quantity;
	private Boolean stock ;
	private String taille ;
	private String couleur ;
	private String marque ;
	
	

	@JsonBackReference(value = "scategory")
	@ManyToOne
	private SCategory scategory;

	@JsonProperty(access = Access.WRITE_ONLY)
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "tag_products", joinColumns = @JoinColumn(name = "tag_id"),
	                                 inverseJoinColumns = @JoinColumn(name = "product_id"))
	private List<Tag> tags;

	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
	private List<Comment> comments;

	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
	private List<ImageColor> imagecolor;
	
	public Product() {
		super();
	}

	public Product(String name, String description, Double price,Integer quantity, String pictureUrl,Boolean stock,Date datecmd,String taille, String couleur,String marque,SCategory scategory, List<Tag> tags,
			List<Comment> comments,List <ImageColor> imagecolor) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity=quantity;
		this.url = pictureUrl;
		this.datecmd = datecmd;
		this.stock = stock ;
		this.taille= taille ;
		this.couleur = couleur ;
		this.marque = marque ;
		this.scategory = scategory;
		this.tags = tags;
		this.comments = comments;
		this.imagecolor = imagecolor ;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}
	public Integer setQuantity(Integer quantity) {
		return this.quantity=quantity;
	}
	public Date getdatecmd() {
		return datecmd;
	}

	public void setdatecmd(Date datecmd) {
		this.datecmd= datecmd;
	}

	public Boolean getStock() {
		return stock;
	}

	public void setStock(Boolean stock) {
		this.stock = stock;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String pictureUrl) {
		this.url = pictureUrl;
	}

	

	public String getTaille() {
		return taille;
	}

	public void setTaille(String taille) {
		this.taille = taille;
	}

	public String getCouleur() {
		return couleur;
	}

	public void setCouleur(String couleur) {
		this.couleur = couleur;
	}

	public String getMarque() {
		return marque;
	}

	public void setMarque(String marque) {
		this.marque = marque;
	}

	public SCategory getScategory() {
		return scategory;
	}

	public void setScategory(SCategory scategory) {
		this.scategory = scategory;
	}
	

	
	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	

	public List<ImageColor> getImagecolor() {
		return imagecolor;
	}

	public void setImagecolor(List<ImageColor> imagecolor) {
		this.imagecolor = imagecolor;
	}

	public void addCommentToProduct(Comment comment) {
		if (getComments() == null) {
			this.comments = new ArrayList<>();
		}
		getComments().add(comment);
		comment.setProduct(this);
	}
	public void addImageColorToProduct(ImageColor imagec) {
		if (getImagecolor() == null) {
			this.imagecolor = new ArrayList<>();
		}
		getImagecolor().add(imagec);
		imagec.setProduct(this);
	}

	public void addTag(Tag tag) {
		if (getTags() == null) {
			this.tags = new ArrayList<>();
		}
		if (!getTags().contains(tag)) {
			getTags().add(tag);
		}
	}
}
