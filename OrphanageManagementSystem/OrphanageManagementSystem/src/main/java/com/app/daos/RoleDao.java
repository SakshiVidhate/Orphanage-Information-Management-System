package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Role;

@Repository
public interface RoleDao extends JpaRepository<Role, Integer>{

}
