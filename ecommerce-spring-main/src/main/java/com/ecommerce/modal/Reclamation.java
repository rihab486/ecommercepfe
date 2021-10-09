package com.ecommerce.modal;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;


@Entity
@Table(name = "reclamations")
public class Reclamation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name ;
	private String addedby ;
	private Double phone;
	private String adresse;
	private String ville ;
	private String codepostal;
	private String message ;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dater ;
	
	@JsonBackReference(value = "user")
	@ManyToOne
    private User user;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "reclamation")
	private List<ReplayReclamation> replayreclamations;

	
	public Reclamation() {
		super();
	}

	public Reclamation(Long id,String name, String addedby, Double phone, String adresse, String ville,
			String codepostal, String message,Date dater,User user,List<ReplayReclamation> replayreclamations) {
		super();
		this.id = id;
		this.name = name;
		this.addedby=addedby;
		this.phone = phone;
		this.adresse = adresse;
		this.ville = ville;
		this.codepostal = codepostal;
		this.message = message;
		this.dater = dater ;
		this.user= user;
		this. replayreclamations =  replayreclamations ;
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

	public Date getDater() {
		return dater;
	}

	public void setDater(Date dater) {
		this.dater = dater;
	}

	public String getAddedby() {
		return addedby;
	}

	public void setAddedby(String addedby) {
		this.addedby = addedby;
	}

	public Double getPhone() {
		return phone;
	}

	public void setPhone(Double phone) {
		this.phone = phone;
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

	public String getCodepostal() {
		return codepostal;
	}

	public void setCodepostal(String codepostal) {
		this.codepostal = codepostal;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<ReplayReclamation> getReplayreclamations() {
		return replayreclamations;
	}

	public void setReplayreclamations(List<ReplayReclamation> replayreclamations) {
		this.replayreclamations = replayreclamations;
	}
	
	public void  addReplayreclamationToReclamation(ReplayReclamation rreclamation) {
		if (getReplayreclamations() == null) {
			this.replayreclamations = new ArrayList<>();
		}
		getReplayreclamations().add(rreclamation);
		rreclamation.setReclamation(this);
	}

	

	
	

}
