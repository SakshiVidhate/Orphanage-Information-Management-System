package com.app.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.StaffDao;
import com.app.dtos.Converter;
import com.app.dtos.StaffDTO;
import com.app.entities.Staff;

@Service
@Transactional
public class StaffServiceImpl {

	@Autowired
	private StaffDao staffDao;
	
	@Autowired
	private Converter converter;
	
	public List<StaffDTO> findStaffsByName(String staffName) {
		List<Staff> staffList = staffDao.findByStaffNameContaining(staffName);
		return staffList.stream()
			.map(staff -> converter.toStaffDTO(staff))
			.collect(Collectors.toList());
	}

	public List<StaffDTO> findAllStaffs() {
		List<Staff> staffList = staffDao.findAll();
		return staffList.stream()
			.map(staff -> converter.toStaffDTO(staff))
			.collect(Collectors.toList());
	}

	public StaffDTO findStaffById(int id) {
		if(staffDao.existsById(id)) {
			Staff staff = staffDao.findById(id);
			return converter.toStaffDTO(staff);
		}
		return null;
	}

	public StaffDTO findStaffByStaffName(String staffName) {
		Staff staff = staffDao.findByStaffName(staffName);
		return converter.toStaffDTO(staff);
	}

	public Map<String, Object> addStaff(StaffDTO staffDTO) {
		List<Staff> staffList = staffDao.findAll();
		boolean flag =false;
		for (Staff staff : staffList) {
			if(staff.getStaffName().equals(staffDTO.getStaffName())) {
				flag=true;
			}
		}
		if(flag == true) {
			return null;
		}
		else {
			Staff staff = converter.toStaffEntity(staffDTO);
			staff = staffDao.save(staff);
			return Collections.singletonMap("insertedId", staff.getId());
		}
	}


	public Map<String, Object> editStaff(int id, StaffDTO staffDto) {
		if(staffDao.existsById(id)) {
			staffDto.setId(id);
			Staff staff = converter.toStaffEntity(staffDto);
			staff = staffDao.save(staff);
			return Collections.singletonMap("changedRows", 1);
		}
		return null;
	}

	public Map<String, Object> deleteStaff(int id) {
		if(staffDao.existsById(id)) {
			staffDao.deleteById(id);
			return Collections.singletonMap("affectedRows", 1);
		}
		return null;
	}

}
