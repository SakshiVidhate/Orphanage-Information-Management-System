package com.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//id    | int         | NO   | PRI | NULL    | auto_increment |
//| role  | varchar(45) | YES  |     | NULL    |                |

@Entity
@Table(name = "role")
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;// 1- admin, 2-parent

	@Column(name = "role")
	private String userRole;

	@OneToMany(mappedBy = "role")
	private List<User> users;

	public Role() {

	}

	public Role(int id, String userRole) {
		super();
		this.id = id;
		this.userRole = userRole;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "Role [id=" + id + ", userRole=" + userRole + "]";
	}

}
