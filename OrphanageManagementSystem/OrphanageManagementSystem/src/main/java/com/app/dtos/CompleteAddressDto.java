package com.app.dtos;

public class CompleteAddressDto {
	
	private int id;
	private String addressLine1;
	private String addressLine2;
	private int addressCodeId;
	private String taluka;
	private String city;
	private String rajya;
	private String country;
	private int postalCode;
	
	public CompleteAddressDto() {
		
	}
	
	public CompleteAddressDto(int id, String addressLine1, String addressLine2, int addressCodeId, String taluka,
			String city, String rajya, String country, int postalCode) {
		super();
		this.id = id;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.addressCodeId = addressCodeId;
		this.taluka = taluka;
		this.city = city;
		this.rajya = rajya;
		this.country = country;
		this.postalCode = postalCode;
	}
	@Override
	public String toString() {
		return String.format(
				"CompleteAddressDto [id=%s, addressLine1=%s, addressLine2=%s, addressCodeId=%s, taluka=%s, city=%s, rajya=%s, country=%s, postalCode=%s]",
				id, addressLine1, addressLine2, addressCodeId, taluka, city, rajya, country, postalCode);
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public int getAddressCodeId() {
		return addressCodeId;
	}
	public void setAddressCodeId(int addressCodeId) {
		this.addressCodeId = addressCodeId;
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
