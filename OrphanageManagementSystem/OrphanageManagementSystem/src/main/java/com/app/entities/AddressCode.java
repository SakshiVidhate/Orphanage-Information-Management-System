package com.app.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//`id` INT NOT NULL AUTO_INCREMENT,
//`taluka` VARCHAR(45) NULL,
//`city` VARCHAR(45) NULL,
//`state` VARCHAR(45) NULL,
//`country` VARCHAR(45) NULL,
//`postalCode` INT NULL,

@Entity
@Table(name = "addresscode")
public class AddressCode {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String taluka;
	
	private String city;
	
	private String state;
	
	private String country;
	
	private int postalCode;
	
	@OneToMany(mappedBy = "addressCode")
	private List<Address> addresses;
	
	public AddressCode() {
	
	}

	public AddressCode(int id, String taluka, String city, String state, String country, int postalCode,
			List<Address> addresses) {
		super();
		this.id = id;
		this.taluka = taluka;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postalCode = postalCode;
		this.addresses = addresses;
	}

	@Override
	public String toString() {
		return String.format(
				"AddressCode [id=%s, taluka=%s, city=%s, state=%s, country=%s, postalCode=%s]", id,
				taluka, city, state, country, postalCode);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTaluka() {
		return taluka;
	}

	public void setTaluka(String taluka) {
		this.taluka = taluka;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(int postalCode) {
		this.postalCode = postalCode;
	}

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}
}
