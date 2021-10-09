package com.ecommerce.payload.request;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupRequest {
	 @NotBlank
	    @Size(min = 3, max = 20)
	    private String username;
	 
	    @NotBlank
	    @Size(max = 50)
	    @Email
	    private String email;
	    
	    private Set<String> role;
	    
	    @NotBlank
	    @Size(min = 6, max = 40)
	    private String password;
	    
	    private String adresse ;
		private Double codepostal ;
		private Double phone ;  
		private String ville ;

		
	  
	    public String getUsername() {
	        return username;
	    }
	 
	    public void setUsername(String username) {
	        this.username = username;
	    }
	 
	    public String getEmail() {
	        return email;
	    }
	 
	    public void setEmail(String email) {
	        this.email = email;
	    }
	 
	    public String getPassword() {
	        return password;
	    }
	 
	    public void setPassword(String password) {
	        this.password = password;
	    }
	    
	    
	    public String getAdresse() {
			return adresse;
		}

		public void setAdresse(String adresse) {
			this.adresse = adresse;
		}

		public Double getCodepostal() {
			return codepostal;
		}

		public void setCodepostal(Double codepostal) {
			this.codepostal = codepostal;
		}
		public Double getPhone() {
			return phone;
		}

		public void setPhone(Double phone) {
			this.phone = phone;
		}
		public String getVille() {
			return ville;
		}

		public void setVille(String ville) {
			this.ville = ville;
		}

		public Set<String> getRole() {
	      return this.role;
	    }
	    
	    public void setRole(Set<String> role) {
	      this.role = role;
	    }

}
