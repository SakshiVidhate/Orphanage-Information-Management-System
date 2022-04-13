package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.AddressCode;

@Repository
public interface AddressCodeDao extends JpaRepository<AddressCode, Integer>{
	AddressCode findByPostalCode(int postalCode);
}
