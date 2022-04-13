package com.app.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

//`id` INT NOT NULL AUTO_INCREMENT,
//`addressCodeId` INT NOT NULL,
//`addressLine1` VARCHAR(400) NULL,
//`addressLine2` VARCHAR(400) NULL,

@Entity
@Table(name = "address")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "addressCodeId")
	private AddressCode addressCode;
	
	private String addressLine1;
	
	private String addressLine2;
	
	
	
	public Address() {
	
	}

	public Address(int id, AddressCode addressCode, String addressLine1, String addressLine2
			) {
		super();
		this.id = id;
		this.addressCode = addressCode;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
	
	}



	@Override
	public String toString() {
		return String.format("Address [id=%s, addressCode=%s, addressLine1=%s, addressLine2=%s]",
				id, addressCode, addressLine1, addressLine2);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public AddressCode getAddressCode() {
		return addressCode;
	}

	public void setAddressCode(AddressCode addressCode) {
		this.addressCode = addressCode;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

}
