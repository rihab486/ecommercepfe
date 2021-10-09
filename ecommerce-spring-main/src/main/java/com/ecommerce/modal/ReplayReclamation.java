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
@Table(name = "reclamations_Replay")
public class ReplayReclamation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name ;
	private String addedby ;
	private String replaymessage ;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dater ;
	
	@JsonBackReference(value = "reclamation")
	@ManyToOne
	private Reclamation reclamation;

	public ReplayReclamation() {
		super();
	}

	public ReplayReclamation(Long id, String name, String addedby, String replaymessage, Date dater,
			Reclamation reclamation) {
		super();
		this.id = id;
		this.name = name;
		this.addedby = addedby;
		this.replaymessage = replaymessage;
		this.dater = dater;
		this.reclamation = reclamation;
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

	public String getAddedby() {
		return addedby;
	}

	public void setAddedby(String addedby) {
		this.addedby = addedby;
	}

	public String getReplaymessage() {
		return replaymessage;
	}

	public void setReplaymessage(String replaymessage) {
		this.replaymessage = replaymessage;
	}

	public Date getDater() {
		return dater;
	}

	public void setDater(Date dater) {
		this.dater = dater;
	}

	public Reclamation getReclamation() {
		return reclamation;
	}

	public void setReclamation(Reclamation reclamation) {
		this.reclamation = reclamation;
	}
	
	

}
