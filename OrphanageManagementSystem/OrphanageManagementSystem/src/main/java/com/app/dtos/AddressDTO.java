package com.app.dtos;

public class AddressDTO {
	
	private int id;
	
	private int addressCodeId;
	
	private String addressLine1;
	
	private String addressLine2;
	
	
	public AddressDTO() {
	
	}

	public AddressDTO(int id, int addressCodeId, String addressLine1, String addressLine2) {
		super();
		this.id = id;
		this.addressCodeId = addressCodeId;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
	}

	@Override
	public String toString() {
		return String.format("AddressDTO [id=%s, addressCodeId=%s, addressLine1=%s, addressLine2=%s]", id,
				addressCodeId, addressLine1, addressLine2);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAddressCodeId() {
		return addressCodeId;
	}

	public void setAddressCodeId(int addressCodeId) {
		this.addressCodeId = addressCodeId;
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
