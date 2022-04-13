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
public class StaffDTO {
	private int id;

	private String  staffName;
	private String jobDescription;
	private double salary;
	private String gender;
	@Temporal(TemporalType.DATE)
	private Date dateOfJoining;

}
