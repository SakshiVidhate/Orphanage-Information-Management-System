package com.app.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.AddressCodeDao;
import com.app.daos.AddressDao;
import com.app.dtos.AddressCodeDTO;
import com.app.dtos.AddressDTO;
import com.app.dtos.CompleteAddressDto;
import com.app.dtos.Converter;
import com.app.entities.Address;
import com.app.entities.AddressCode;

@Service
@Transactional
public class AddressServiceImpl {

	@Autowired
	private AddressDao addressDao;
	
	@Autowired
	private AddressCodeDao addressCodeDao;
	
	@Autowired
	private Converter converter;

	public AddressDTO findAddressByID(int addressId) {
		if(addressDao.existsById(addressId)) {
			Address a = addressDao.getById(addressId);
			return converter.toAddressDto(a);
		}
		return null;
	}
	
	public AddressDTO saveAddress(AddressDTO addressDto) {	
		Address address  = converter.toAddressEntity(addressDto);
		address = addressDao.save(address);
		addressDto= converter.toAddressDto(address);
		return addressDto;
	}
	
	public AddressDTO updateAddress(int id, AddressDTO addressDto) {
		if((addressCodeDao.existsById(addressDto.getAddressCodeId())&&(addressDao.existsById(id)))) {
			Address r = addressDao.getById(id);
			AddressDTO addrDto = converter.toAddressDto(r);
			addrDto.setAddressCodeId(addressDto.getAddressCodeId());
			addrDto.setAddressLine1(addressDto.getAddressLine1());
			addrDto.setAddressLine2(addressDto.getAddressLine2());
			Address r2 =converter.toAddressEntity(addrDto);
			r2 = addressDao.save(r2);
			addrDto = converter.toAddressDto(r2);
			return addrDto;
		}else {
			return null;
		}
	}
	
	public AddressCodeDTO findAddressCodeByPostalcode(int postalCode) {
		AddressCode addressCode;
		try {
			addressCode = addressCodeDao.findByPostalCode(postalCode);
			AddressCodeDTO dto = converter.toAddressCodeDto(addressCode);
			return dto;
		} catch (Exception e) {
			return null;
		}
		
		
	}
	
	public AddressCodeDTO findAddressCodeByID(int addressCodeId) {
		if(addressCodeDao.existsById(addressCodeId)) {
			AddressCode c = addressCodeDao.getById(addressCodeId);
			return converter.toAddressCodeDto(c);
		}
		return null;
	}
	
	public List<AddressCodeDTO> getAllAddressCode() {
			List<AddressCode> codeList = addressCodeDao.findAll();
			List<AddressCodeDTO> list = new ArrayList<>();
			for (AddressCode addressCode: codeList) {
				AddressCodeDTO dto = converter.toAddressCodeDto(addressCode);
				list.add(dto);
			}
		return list;
	}
	 
	public CompleteAddressDto findCompleteAddressByID(int addressId) {
		if(addressDao.existsById(addressId)) {
			Address a = addressDao.getById(addressId);
			AddressCode c = addressCodeDao.getById(a.getAddressCode().getId());
			CompleteAddressDto dto = converter.toCompleteAddressDto(a, c);
			return dto;
		}
		return null;
	}
}
