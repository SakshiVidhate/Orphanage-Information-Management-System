package com.app.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="adoption")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Adoption  {
	
//	+----------------+-------------+------+-----+---------+----------------+
//	| Field          | Type        | Null | Key | Default | Extra          |
//	+----------------+-------------+------+-----+---------+----------------+
//	| id             | int         | NO   | PRI | NULL    | auto_increment |
//	| userId         | int         | NO   | MUL | NULL    |                |
//	| orphanId       | int         | NO   | MUL | NULL    |                |
//	| staffId        | int         | NO   | MUL | NULL    |                |
//	| adoptionStatus | varchar(45) | NO   |     | NULL    |                |
//	| regDate        | date        | YES  |     | NULL    |                |
//	+----------------+-------------+------+-----+---------+----------------+
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne
	@JoinColumn(name="orphanId")
	private Orphan orphan;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
	
	@OneToOne
	@JoinColumn(name="staffId")
	private Staff staff;
	
	private String adoptionStatus;
	
	@Temporal(TemporalType.DATE)
	private Date regDate;
	
	
	
}
