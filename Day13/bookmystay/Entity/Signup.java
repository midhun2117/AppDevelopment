package com.midhun.bookmystay.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signup")
public class Signup {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	private String Firstname;
    private String Lastname;
	public Signup(Long Id, String Firstname, String Lastname) {
		super();
		this.Id = Id;
		this.Firstname = Firstname;
		this.Lastname = Lastname;
	}
    
    public Long getId() {
		return Id;
	}
	public void setId(Long Id) {
		this.Id = Id;
	}
	public String getFirstname() {
		return Firstname;
	}
	public void setFirstname(String Firstname) {
		this.Firstname = Firstname;
	}
	
	public String getLastname() {
		return Lastname;
	}
	public void setLastname(String Lastname) {
		this.Lastname = Lastname;
	}
	
	
	
	

}
