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
@Table(name="orphan")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Orphan  {
//	+------------+-------------+------+-----+---------+----------------+
//	| Field      | Type        | Null | Key | Default | Extra          |
//	+------------+-------------+------+-----+---------+----------------+
//	| id         | int         | NO   | PRI | NULL    | auto_increment |
//	| orphanName | varchar(45) | NO   |     | NULL    |                |
//	| gender     | varchar(45) | YES  |     | NULL    |                |
//	| birthDate  | date        | YES  |     | NULL    |                |
//	| age        | int         | YES  |     | NULL    |                |
//	| education  | varchar(45) | NO   |     | NULL    |                |
//	| health     | varchar(40) | NO   |     | NULL    |                |
//	| bloodGroup | varchar(20) | NO   |     | NULL    |                |
//	+------------+-------------+------+-----+---------+----------------+

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(length=45)
	@NotEmpty(message =" Name can't be blank")
	private String  orphanName;
	private String gender;
	@Temporal(TemporalType.DATE)
	private Date birthDate;
	private int age;
	@Column(length=20)
	private String education;
	@Column(length=20)
	private String health;
	@Column(length=20)
	private String bloodGroup;
 

}
