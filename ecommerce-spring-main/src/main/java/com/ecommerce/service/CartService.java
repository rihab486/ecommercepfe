package com.ecommerce.service;

import java.util.List;

import com.ecommerce.modal.Cart;
import com.ecommerce.modal.Product;

public interface CartService {
	
	Cart addCartToUser(Cart cart, long idUser);
	
	void deleteCart(long id);
	
	List<Cart> findCartsForUser(long idUser);
	
	Cart findCartById(long id);
	
	void removeFromCart(long idCart, long idUser);
	
	List<Cart> findAllCarts();
	
	Cart findByCartName(String name);

}
