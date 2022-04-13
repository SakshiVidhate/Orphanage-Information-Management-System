package com.app.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AdoptionDTO;
import com.app.dtos.Response;
import com.app.services.AdoptionServiceImpl;

@RestController
@CrossOrigin(origins = "*")
public class AdoptionController {
	@Autowired
	private AdoptionServiceImpl adoptionService;
	
	@GetMapping("/adoption/details/{id}")
	public ResponseEntity<?> findAdoptionById(@PathVariable("id") int id) {
		AdoptionDTO result = adoptionService.findAdoptionById(id);
		if(result == null) 
			return Response.error("Adoption Details does not exist");
		else
			return Response.success(result);
	}
	@PostMapping("/adoption/add")
	public ResponseEntity<?> addAdoption(@RequestBody AdoptionDTO adoptionDto) {
		System.out.println("Inserting: " + adoptionDto);
		Map<String, Object> result = adoptionService.addAdoption(adoptionDto);
		System.out.println(adoptionDto.getId());
		System.out.println(adoptionDto.getOrphanId());
		System.out.println(adoptionDto.getUserId());
		System.out.println(adoptionDto.getStaffId());
		System.out.println(adoptionDto.getStatus());
		System.out.println(adoptionDto.getRegDate());
		if (result == null)
			return Response.error("Adoption records does not exist");
		else
			return Response.success(result);
	}

	@PutMapping("/adoption/{id}")
	public ResponseEntity<?> editAdoption(@PathVariable("id") int id, @RequestBody AdoptionDTO adoptionDto) {
		Map<String, Object> result = adoptionService.editAdoption(id, adoptionDto);
		if (result == null)
			return Response.error("Adoption Deatils does not match");
		else
			return Response.success(result);
	}

	@DeleteMapping("/adoption/delete/{id}")
	public ResponseEntity<?> deleteAdoption(@PathVariable("id") int id) {
		Map<String, Object> result = adoptionService.deleteAdoption(id);
		if (result == null)
			return Response.error("Adoption records does not exist");
		else
			return Response.success(result);
	}

	

	@GetMapping("/adoption/all")
	public ResponseEntity<?> getAll(){
		List<AdoptionDTO> result =adoptionService.findAllAdoptions();
		if(result == null) 
			return Response.error("There are no adoptions");
		else
			return Response.success(result);
	}
	
	
	@GetMapping("/adoption/user/{id}")
	public ResponseEntity<?> findAdoptionByUserId(@PathVariable("id") int id){
		List<AdoptionDTO> result =adoptionService.findAdoptionByUserId(id);
		if(result == null) 
			return Response.error("There are no adoptions");
		else
			return Response.success(result);
	}
}
