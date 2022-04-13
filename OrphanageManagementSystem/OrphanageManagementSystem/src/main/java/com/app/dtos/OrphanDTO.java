package com.app.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


public class OrphanDTO {
	private int id;

	private String orphanName;
	private String gender;
	private Date birthDate;
	private int age;
	private String education;
	private String health;
	private String bloodGroup;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOrphanName() {
		return orphanName;
	}
	public void setOrphanName(String orphanName) {
		this.orphanName = orphanName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getHealth() {
		return health;
	}
	public void setHealth(String health) {
		this.health = health;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	public OrphanDTO(int id, String orphanName, String gender, Date birthDate, int age, String education, String health,
			String bloodGroup) {
		super();
		this.id = id;
		this.orphanName = orphanName;
		this.gender = gender;
		this.birthDate = birthDate;
		this.age = age;
		this.education = education;
		this.health = health;
		this.bloodGroup = bloodGroup;
	}
	public OrphanDTO() {
		// TODO Auto-generated constructor stub
	}
	
	
}
