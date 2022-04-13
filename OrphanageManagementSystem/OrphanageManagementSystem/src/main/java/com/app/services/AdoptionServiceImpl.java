package com.app.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.AdoptionDao;
import com.app.daos.OrphanDao;
import com.app.daos.StaffDao;
import com.app.daos.UserDao;
import com.app.dtos.AdoptionDTO;
import com.app.dtos.Converter;
import com.app.entities.Adoption;

@Service
@Transactional
public class AdoptionServiceImpl {

	@Autowired
	private AdoptionDao adoptionDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private OrphanDao orphanDao;

	@Autowired
	private StaffDao staffDao;

	@Autowired
	private Converter converter;

	public AdoptionDTO findAdoptionById(int id) {
		if (adoptionDao.existsById(id)) {
			Optional<Adoption> adoption = adoptionDao.findById(id);
			Adoption a = adoption.orElse(null);
			return converter.toAdoptionDTO(a);
		}
		return null;
	}

	public Map<String, Object> addAdoption(AdoptionDTO adoptionDto) {
		int orphanId = adoptionDto.getOrphanId();
		int staffId = adoptionDto.getStaffId();
		int userId = adoptionDto.getUserId();
		if (!orphanDao.existsById(orphanId)) {
			return null;
		} else if (!staffDao.existsById(staffId)) {
			return null;
		} else if (!userDao.existsById(userId)) {
			return null;
		} else {
			Adoption adop = converter.toAdoptionEntity(adoptionDto);
			adop = adoptionDao.save(adop);
			
			return Collections.singletonMap("insertedId", adop.getId());
		}
	}

	public Map<String, Object> editAdoption(int id, AdoptionDTO adoptionDto) {
		int orphanId = adoptionDto.getOrphanId();
		int staffId = adoptionDto.getStaffId();
		if (!orphanDao.existsById(orphanId)) {
			return null;
		} else if (!staffDao.existsById(staffId)) {
			return null;
		} else {
			if (adoptionDao.existsById(id)) {
				adoptionDto.setId(id);
				Adoption a = converter.toAdoptionEntity(adoptionDto);
				a = adoptionDao.save(a);
				return Collections.singletonMap("changedRows", 1);
			}
			return null;
		}

	}

	public Map<String, Object> deleteAdoption(int id) {
		if(adoptionDao.existsById(id)) {
			adoptionDao.deleteById(id);
			return Collections.singletonMap("affectedRows", 1);
		}
		return null;
	}

	public List<AdoptionDTO> findAllAdoptions() {
		List<Adoption> list = adoptionDao.findAll();
		return list.stream()
			.map(a -> converter.toAdoptionDTO(a))
			.collect(Collectors.toList());
	}
	
	public List<AdoptionDTO> findAdoptionByUserId(int userId) {
		if(userDao.existsById(userId)) {
			List<Adoption> list = adoptionDao.findAdoptionByUserId(userId);
			return list.stream()
				.map(a -> converter.toAdoptionDTO(a))
				.collect(Collectors.toList());
		}
		return null;
	}
}
