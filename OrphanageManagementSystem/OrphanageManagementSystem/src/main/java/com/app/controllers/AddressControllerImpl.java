package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AddressCodeDTO;
import com.app.dtos.AddressDTO;
import com.app.services.AddressServiceImpl;
import com.app.dtos.CompleteAddressDto;
import com.app.dtos.Response;

@RestController
@CrossOrigin(origins = "*")
public class AddressControllerImpl {

	@Autowired
	private AddressServiceImpl addressService;
	
	@GetMapping("/address/{id}")
	public ResponseEntity<?> GetUserAddressById(@PathVariable("id") int id){
		AddressDTO addressDto = addressService.findAddressByID(id);
		if(addressDto == null)
			return Response.error("Address not found");
		return Response.success(addressDto);
	}
	
	@PostMapping("/address")
	public ResponseEntity<?> SaveUserAddress(@RequestBody AddressDTO addressDto){
		AddressDTO result = addressService.saveAddress(addressDto);
		if(result == null)
			return Response.error("Address not found");
		return Response.success(result);
	}
	
	@PutMapping("/address/{id}")
	public ResponseEntity<?> UpdateUserAddress(@PathVariable("id") int id, @RequestBody AddressDTO addressDto){
		AddressDTO result = addressService.updateAddress(id, addressDto);
		if(result == null)
			return Response.error("Address not found");
		return Response.success(result);
	}
	
	@GetMapping("/addressCode/{id}")
	public ResponseEntity<?> GetUserAddressCodeById(@PathVariable("id") int id){
		AddressCodeDTO addressCodeDto = addressService.findAddressCodeByID(id);
		if(addressCodeDto == null)
			return Response.error("Address code not found");
		return Response.success(addressCodeDto);
	}
	
	@GetMapping("/addressCode/all")
	public ResponseEntity<?> GetAllAddressCodeData(){
		List<AddressCodeDTO> addressCodeDtoList = addressService.getAllAddressCode();
		if(addressCodeDtoList == null)
			return Response.error("No address code not found");
		return Response.success(addressCodeDtoList);
	}
	
	@GetMapping("/addressCode/all/{id}")
	public ResponseEntity<?> GetAddressCodeDataByPostalCode(@PathVariable("id") int id){
		AddressCodeDTO addressCodeDto = addressService.findAddressCodeByPostalcode(id);
		if(addressCodeDto == null)
			return Response.error("Postal code does not available");
		return Response.success(addressCodeDto);
	}
	
	@GetMapping("/address/complete/{id}")
	public ResponseEntity<?> GetCompleteUserAddressById(@PathVariable("id") int id){
		CompleteAddressDto result = addressService.findCompleteAddressByID(id);
		if(result == null)
			return Response.error("Address code not found");
		return Response.success(result);
	}

}
