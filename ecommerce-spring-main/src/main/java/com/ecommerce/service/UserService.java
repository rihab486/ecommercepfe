package com.ecommerce.service;

import java.util.List;

import com.ecommerce.modal.User;

public interface UserService {

	
    
  User findUserById(long id);
  
  void deleteUser(long id);
  
  List<User> findAllUsers();
  
}
