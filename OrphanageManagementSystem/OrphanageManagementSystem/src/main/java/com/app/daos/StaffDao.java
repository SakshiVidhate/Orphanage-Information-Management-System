package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Staff;

@Repository
public interface StaffDao extends JpaRepository<Staff, Integer>{

	List<Staff> findAll() ;
    List<Staff> findByStaffNameContaining(String staffName);
    Staff findById(int id);
	Staff findByStaffName(String staffName);

}
