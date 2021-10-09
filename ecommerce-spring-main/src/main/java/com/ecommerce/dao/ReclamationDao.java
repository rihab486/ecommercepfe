package com.ecommerce.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.modal.Reclamation;
public interface ReclamationDao extends JpaRepository<Reclamation, Long>{
	   Optional<Reclamation> findByName(String name);
  

}
