package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Address;
import com.app.entities.AddressCode;
import com.app.entities.Adoption;
import com.app.entities.Orphan;
import com.app.entities.Role;
import com.app.entities.Staff;
import com.app.entities.User;

@Component
public class Converter {

	public UserDTO toCompleteUserDto(User entity) {
		UserDTO dto = new UserDTO();
		dto.setId(entity.getId());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		dto.setFirstName(entity.getFirstName());
		dto.setLastName(entity.getLastName());
		dto.setRoleId(entity.getRole().getId());
		dto.setAddressId(entity.getAddress().getId());
		dto.setContact(entity.getContact());
		dto.setGender(entity.getGender());
		dto.setRegDate(entity.getRegDate());
		dto.setOccupation(entity.getOccupation());
		dto.setGovtId(entity.getGovtId());
		dto.setIncome(entity.getIncome());
		return dto;
	}
	
	
	public User toCompleteUserEntity(UserDTO dto) {
		User entity = new User();
		Role role = new Role();
		Address address = new Address();
		entity.setId(dto.getId());
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		role.setId(dto.getRoleId());
		entity.setRole(role);
		address.setId(dto.getAddressId());
		entity.setAddress(address);
		entity.setContact(dto.getContact());
		entity.setGender(dto.getGender());
		entity.setRegDate(dto.getRegDate());
		entity.setOccupation(dto.getOccupation());
		entity.setGovtId(dto.getGovtId());
		entity.setIncome(dto.getIncome());
		return entity ;
	}
	
	public CompleteAddressDto toCompleteAddressDto(Address entity, AddressCode addresscodeEntity) {
		
		CompleteAddressDto dto = new CompleteAddressDto();
		
		dto.setId(entity.getId());
		dto.setAddressLine1(entity.getAddressLine1());
		dto.setAddressLine2(entity.getAddressLine2());
		dto.setAddressCodeId(entity.getAddressCode().getId());
		
		dto.setTaluka(addresscodeEntity.getTaluka());
		dto.setCity(addresscodeEntity.getCity());
		dto.setRajya(addresscodeEntity.getState());
		dto.setCountry(addresscodeEntity.getCountry());
		dto.setPostalCode(addresscodeEntity.getPostalCode());
		return dto;
	}
	
//Address-update
	public AddressDTO toAddressDto(Address entity) {
		AddressDTO dto = new AddressDTO();
		dto.setId(entity.getId());
		dto.setAddressCodeId(entity.getAddressCode().getId());
		dto.setAddressLine1(entity.getAddressLine1());
		dto.setAddressLine2(entity.getAddressLine2());
		return dto;
	}
	
	public Address toAddressEntity(AddressDTO dto) {
		Address entity = new Address();
		AddressCode addressCode = new AddressCode();
		entity.setId(dto.getId());
		addressCode.setId(dto.getAddressCodeId());
		entity.setAddressCode(addressCode);
		entity.setAddressLine1(dto.getAddressLine1());
		entity.setAddressLine2(dto.getAddressLine2());
		return entity;
	}
//Addresscode-update
	public AddressCodeDTO toAddressCodeDto(AddressCode entity) {
		AddressCodeDTO dto = new AddressCodeDTO();
		dto.setId(entity.getId());
		dto.setTaluka(entity.getTaluka());
		dto.setCity(entity.getCity());
		dto.setRajya(entity.getState());
		dto.setCountry(entity.getCountry());
		dto.setPostalCode(entity.getPostalCode());
		return dto;
	}
	
	public AddressCode toAddressCodeEntity(AddressCodeDTO dto) {
		AddressCode entity = new AddressCode();
		entity.setId(dto.getId());
		entity.setTaluka(dto.getTaluka());
		entity.setCity(dto.getCity());
		entity.setState(dto.getRajya());
		entity.setCountry(dto.getCountry());
		entity.setPostalCode(dto.getPostalCode());
		return entity;
	}

		public OrphanDTO toOrphanDTO(Orphan entity) {
			OrphanDTO dto = new OrphanDTO();
			dto.setId(entity.getId());
			dto.setOrphanName(entity.getOrphanName());
			dto.setBirthDate(entity.getBirthDate());
			dto.setGender(entity.getGender());
			dto.setAge(entity.getAge());
			dto.setEducation(entity.getEducation());
			dto.setHealth(entity.getHealth());
			dto.setBloodGroup(entity.getBloodGroup());
			return dto;
		}
		
		public Orphan toOrphanEntity(OrphanDTO dto) {
			Orphan entity = new Orphan();
			entity.setId(dto.getId());
			entity.setOrphanName(dto.getOrphanName());
			entity.setBirthDate(dto.getBirthDate());
			entity.setGender(dto.getGender());
			entity.setAge(dto.getAge());
			entity.setEducation(dto.getEducation());
			entity.setHealth(dto.getHealth());
			entity.setBloodGroup(dto.getBloodGroup());
			return entity;
		}
		public StaffDTO toStaffDTO(Staff entity) {
			StaffDTO dto = new StaffDTO();
			dto.setId(entity.getId());
			dto.setStaffName(entity.getStaffName());
			dto.setGender(entity.getGender());
			dto.setDateOfJoining(entity.getDateOfJoining());
			dto.setJobDescription(entity.getJobDescription());
			dto.setSalary(entity.getSalary());
			return dto;
		}
		public Staff toStaffEntity(StaffDTO dto) {
			Staff entity = new Staff();
			entity.setId(dto.getId());
			entity.setStaffName(dto.getStaffName());
			entity.setGender(dto.getGender());
			entity.setDateOfJoining(dto.getDateOfJoining());
			entity.setJobDescription(dto.getJobDescription());
			entity.setSalary(dto.getSalary());
			return entity;
		}
       
		public AdoptionDTO toAdoptionDTO(Adoption entity) {
			AdoptionDTO dto=new AdoptionDTO();
			dto.setId(entity.getId());
			dto.setOrphanId(entity.getOrphan().getId());
			dto.setUserId(entity.getUser().getId());
			dto.setStaffId(entity.getStaff().getId());
			dto.setRegDate(entity.getRegDate());
			dto.setStatus(entity.getAdoptionStatus());
			return dto;
		}
		
		public Adoption toAdoptionEntity(AdoptionDTO dto) {
			Adoption entity=new Adoption();
			entity.setId(dto.getId());
			Orphan orphan=new Orphan();
			orphan.setId(dto.getOrphanId());
			entity.setOrphan(orphan);
			User user=new User();
			user.setId(dto.getUserId());
			entity.setUser(user);
			Staff staff=new Staff();
			staff.setId(dto.getStaffId());
			entity.setStaff(staff);
			entity.setAdoptionStatus(dto.getStatus());
            entity.setRegDate(dto.getRegDate());
			return entity;
		}
		
		
}
