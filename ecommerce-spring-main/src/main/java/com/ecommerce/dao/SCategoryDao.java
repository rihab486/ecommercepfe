package com.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.modal.SCategory;

public interface SCategoryDao extends JpaRepository<SCategory, Long>{

}
