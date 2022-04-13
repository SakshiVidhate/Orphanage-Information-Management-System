package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="staff")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Staff  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length=20)
	@NotEmpty(message ="Name can't be blank")
	private String staffName;
	@Column(length=20)
	@NotEmpty(message ="Job description can't be blank")
	private String jobDescription;
	private double salary;
	@Column(length=20)
	private String gender;
	@Temporal(TemporalType.DATE)
	private Date dateOfJoining;
	
}
