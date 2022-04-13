package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer>{

//	@Modifying
//	@Query("INSERT INTO address(addressCodeId, addressLine1, addressLine2) VALUES(?1, ?2, ?3)")
//	int inserNewAddress(int addressCodeId, String addressLine1, String addressLine2);
}
