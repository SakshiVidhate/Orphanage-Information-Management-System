package com.app.dtos;

public class AddressCodeDTO {
	
	private int id;
	
	private String taluka;
	
	private String city;
	
	private String rajya;
	
	private String country;
	
	private int postalCode;	
	
	public AddressCodeDTO() {
	
	}

	public AddressCodeDTO(int id, String taluka, String city, String rajya, String country, int postalCode) {
		super();
		this.id = id;
		this.taluka = taluka;
		this.city = city;
		this.rajya = rajya;
		this.country = country;
		this.postalCode = postalCode;
	}

	@Override
	public String toString() {
		return String.format("AddressCodeDTO [id=%s, taluka=%s, city=%s, rajya=%s, country=%s, postalCode=%s]", id,
				taluka, city, rajya, country, postalCode);
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

	public String getRajya() {
		return rajya;
	}

	public void setRajya(String rajya) {
		this.rajya = rajya;
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

}
