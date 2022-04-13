package com.app.daos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	User findByEmail(String email);
  
	List<User> findByIdGreaterThan(int id);
	User findByFirstName(String userName);

	List<User> findByFirstNameContaining(String userName);
    
	User findById(int id);
	@Modifying
	@Query("UPDATE User u SET u.firstName = ?2, u.lastName = ?3, u.email = ?4, u.contact = ?5, u.gender = ?6, u.regDate = ?7 ,u.occupation = ?8,u.govtId = ?9,u.income = ?10 WHERE u.id = ?1")
	int updateProfile(int id, String firstName, String lastName, String email, String contact, String gender, Date regDate,String occupation,long govtId,double income);

}
