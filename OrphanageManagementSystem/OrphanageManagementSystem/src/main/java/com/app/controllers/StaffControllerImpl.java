package com.app.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.Response;
import com.app.dtos.StaffDTO;
import com.app.services.StaffServiceImpl;

@RestController
@CrossOrigin(origins = "*")
public class StaffControllerImpl {
	 @Autowired
	 private StaffServiceImpl staffService;
		@GetMapping("/staff/all")
		public ResponseEntity<?> findStaffs(@RequestParam(name="staffName",defaultValue="")String staffName,HttpServletResponse resp){
			List<StaffDTO> result=new ArrayList<>();
			if(!staffName.isEmpty())
				result=staffService.findStaffsByName(staffName);
			else
				result = staffService.findAllStaffs();
			return Response.success(result);
		}
		
		@GetMapping("/staff/details/{id}")
		public ResponseEntity<?> findStaffById(@PathVariable("id") int id) {
			StaffDTO result = staffService.findStaffById(id);
			if(result == null) 
				return Response.error("Staff does not exist");
			else
				return Response.success(result);
		}
		
		@GetMapping("/staff/{staffName}")
		public ResponseEntity<?> findOrphanByOrphanName(@PathVariable("staffName") String staffName) {
			StaffDTO result = staffService.findStaffByStaffName(staffName);
			return Response.success(result);
		}

		@PostMapping("/staff/add")
		public ResponseEntity<?> addStaff(@RequestBody StaffDTO staffDTO) {
			System.out.println("Inserting: " + staffDTO);
			Map<String, Object> result = staffService.addStaff(staffDTO);
			if (result == null)
				return Response.error("Same Staff already exists");
			else
				return Response.success(result);
		}

		@PutMapping("/staff/{id}")
		public ResponseEntity<?> editStaff(@PathVariable("id") int id, @RequestBody StaffDTO staffDto) {
			Map<String, Object> result = staffService.editStaff(id, staffDto);
			if (result == null)
				return Response.error("Staff does not exist");
			else
				return Response.success(result);
		}

		@DeleteMapping("/staff/delete/{id}")
		public ResponseEntity<?> deleteStaff(@PathVariable("id") int id) {
			Map<String, Object> result = staffService.deleteStaff(id);
			if (result == null)
				return Response.error("Staff does not exist");
			else
				return Response.success(result);
		}
		
	

}
