package com.ecommerce.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.modal.ERole;
import com.ecommerce.modal.Role;


public interface RoleDao extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);

}
