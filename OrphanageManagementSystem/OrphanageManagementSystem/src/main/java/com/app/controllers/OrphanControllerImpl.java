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

import com.app.dtos.OrphanDTO;
import com.app.dtos.Response;
import com.app.entities.Orphan;
import com.app.services.OrphanServiceImpl;

@RestController
@CrossOrigin(origins = "*")
public class OrphanControllerImpl {
	
 @Autowired
 private OrphanServiceImpl orphanService;
 
	@GetMapping("/orphan/all")
	public ResponseEntity<?> findOrphans(@RequestParam(name="orphanName",defaultValue="")String orphanName,HttpServletResponse resp){
		List<OrphanDTO> result=new ArrayList<>();
		if(!orphanName.isEmpty())
			result=orphanService.findOrphansByName(orphanName);
		else
			result = orphanService.findAllOrphans();
		return Response.success(result);
	}
	
	@GetMapping("/orphan/{orphanName}")
	public ResponseEntity<?> findOrphanByOrphanName(@PathVariable("orphanName") String orphanName) {
		OrphanDTO result = orphanService.findOrphanByOrphanName(orphanName);
		return Response.success(result);
	}
	
	@GetMapping("/orphan/details/{id}")
	public ResponseEntity<?> findOrphanById(@PathVariable("id") int id) {
		OrphanDTO result = orphanService.findOrphanById(id);
		if(result == null) 
			return Response.error("Orphan does not exist");
		else
			return Response.success(result);
	}
	
	
	@PostMapping("/orphan/add")
	public ResponseEntity<?> addOrphan(@RequestBody OrphanDTO orphanDto) {
		System.out.println("Inserting: " + orphanDto);
		Map<String, Object> result = orphanService.addOrphan(orphanDto);
		if (result == null)
			return Response.error("Same Orphan already exists");
		else
			return Response.success(result);
	}

	@PutMapping("/orphan/{id}")
	public ResponseEntity<?> editOrphan(@PathVariable("id") int id, @RequestBody OrphanDTO orphanDto) {
		Map<String, Object> result = orphanService.editOrphan(id, orphanDto);
		if (result == null)
			return Response.error("Orphan does not exist");
		else
			return Response.success(result);
	}

	@DeleteMapping("/orphan/delete/{id}")
	public ResponseEntity<?> deleteOrphan(@PathVariable("id") int id) {
		Map<String, Object> result = orphanService.deleteOrphan(id);
		if (result == null)
			return Response.error("Orphan does not exist");
		else
			return Response.success(result);
	}

	
//	@GetMapping("/orphan/details/{age}")
//	public ResponseEntity<?> findOrphanByAge(@PathVariable("age") int age) {
//		List<Orphan> result = orphanService.findOrphanByAge(age, age);
//		if(result == null) 
//			return Response.error("Orphan does not exist");
//		else
//			return Response.success(result);
//	}
}
