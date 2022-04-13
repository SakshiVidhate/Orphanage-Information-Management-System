package com.app.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.OrphanDao;
import com.app.dtos.Converter;
import com.app.dtos.OrphanDTO;
import com.app.entities.Orphan;


@Service
@Transactional
public class OrphanServiceImpl {

	@Autowired
	private OrphanDao orphanDao;
	
	@Autowired
	private Converter converter;
	
	

	public List<OrphanDTO> findAllOrphans() {
		List<Orphan> orphanList = orphanDao.findAll();
		return orphanList.stream()
			.map(orphan -> converter.toOrphanDTO(orphan))
			.collect(Collectors.toList());
	}
	
	public OrphanDTO findOrphanByOrphanName(String orphanName) {
		Orphan orphan = orphanDao.findByOrphanName(orphanName);
		return converter.toOrphanDTO(orphan);
	}
	
	public OrphanDTO findOrphanById(int orphanid) {
		if(orphanDao.existsById(orphanid)) {
			Orphan orphan = orphanDao.findById(orphanid);
			return converter.toOrphanDTO(orphan);
		}
		return null;
	}

	public List<OrphanDTO> findOrphansByName(String orphanName) {
		List<Orphan> orphanList = orphanDao.findByOrphanNameContaining(orphanName);
		return orphanList.stream()
			.map(orphan -> converter.toOrphanDTO(orphan))
			.collect(Collectors.toList());
	}

	public Map<String, Object> addOrphan(OrphanDTO orphanDto) {
		List<Orphan> orphanList = orphanDao.findAll();
		boolean flag =false;
		for (Orphan orphan : orphanList) {
			if(orphan.getOrphanName().equals(orphanDto.getOrphanName())) {
				flag=true;
			}
		}
		if(flag == true) {
			return null;
		}
		else {
			Orphan orphan = converter.toOrphanEntity(orphanDto);
			orphan = orphanDao.save(orphan);
			return Collections.singletonMap("insertedId", orphan.getId());
		}
	}

	public Map<String, Object> editOrphan(int orphanId, OrphanDTO orphanDto) {
		if(orphanDao.existsById(orphanId)) {
			orphanDto.setId(orphanId);
			Orphan orphan = converter.toOrphanEntity(orphanDto);
			orphan = orphanDao.save(orphan);
			return Collections.singletonMap("changedRows", 1);
		}
		return null;
	}

	public Map<String, Object> deleteOrphan(int orphanId) {
		if(orphanDao.existsById(orphanId)) {
			orphanDao.deleteById(orphanId);
			return Collections.singletonMap("affectedRows", 1);
		}
		return null;
	}

	public List<Orphan> findOrphanByAge(Integer startAge, Integer endAge ) {
		return orphanDao.findByAgeBetween(startAge,endAge);
	}

}


	


