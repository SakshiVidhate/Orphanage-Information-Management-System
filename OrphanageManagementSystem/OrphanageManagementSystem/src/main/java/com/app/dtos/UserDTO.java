package com.app.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {

	private int id;


	private String firstName;
	private String lastName;

	private String email;

	private String password;

	private int roleId;

	private int addressId;

	private String contact;

	private String gender;

	@Temporal(TemporalType.DATE)
	private Date regDate;

	private String occupation;

	private long govtId;

	private double income;

	
}
