package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Orphan;

@Repository
public interface OrphanDao extends JpaRepository<Orphan, Integer>{

	Orphan findById(int id);
	List<Orphan> findByOrphanNameContaining(String orphanName);
	Orphan findByOrphanName(String orphanName);
	List<Orphan> findByAgeBetween(Integer startAge, Integer endAge);

}
