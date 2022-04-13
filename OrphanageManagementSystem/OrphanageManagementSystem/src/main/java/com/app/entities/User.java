package com.app.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//id         | int          | NO   | PRI | NULL    | auto_increment |
//| firstName  | varchar(45)  | NO   |     | NULL    |                |
//| lastName   | varchar(45)  | NO   |     | NULL    |                |
//| email      | varchar(45)  | NO   | UNI | NULL    |                |
//| password   | varchar(600) | NO   |     | NULL    |                |
//| roleId     | int          | YES  | MUL | NULL    |                |
//| addressId  | int          | YES  | MUL | NULL    |                |
//| contact    | varchar(45)  | YES  |     | NULL    |                |
//| gender     | varchar(45)  | YES  |     | NULL    |                |
//| regDate    | date         | YES  |     | NULL    |                |
//| occupation | varchar(45)  | YES  |     | NULL    |                |
//| govtId     | bigint       | YES  |     | NULL    |                |
//| income     | double(7,2)  | YES  |     | NULL    |
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;


private String firstName;
	
	private String lastName;

	@Column(unique = true)
	private String email;

	private String password;

	@ManyToOne()
	@JoinColumn(name = "roleId" )
	private Role role;

	@ManyToOne()
	@JoinColumn(name = "addressId")
	private Address address;

	private String contact;

	private String gender;

	@Temporal(TemporalType.DATE)
	private Date regDate;

	private String occupation;

	private long govtId;

	private double income;
		

}
