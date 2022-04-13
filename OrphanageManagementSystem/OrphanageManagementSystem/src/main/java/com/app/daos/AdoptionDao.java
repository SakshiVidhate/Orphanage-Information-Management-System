package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.Adoption;
@Repository
public interface AdoptionDao extends JpaRepository<Adoption, Integer> {


//	@Query("Select a from adoption a where a.id=?1")
//	Adoption AdoptionGetById(int id);
	List<Adoption> findAdoptionByUserId(int userId);

}
