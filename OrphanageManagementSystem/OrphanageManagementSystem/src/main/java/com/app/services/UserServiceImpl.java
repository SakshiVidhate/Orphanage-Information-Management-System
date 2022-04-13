package com.app.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.daos.UserDao;
import com.app.dtos.Converter;
import com.app.dtos.Credentials;
import com.app.dtos.UserDTO;
import com.app.entities.User;
import com.app.entities.Role;

@Service
@Transactional
public class UserServiceImpl {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private Converter converter;

	public UserDTO findUserByID(int userId) {
		User u = userDao.getById(userId);
		return converter.toCompleteUserDto(u);
	}

	public List<UserDTO> findAllUsers() {
		List<User> userList = userDao.findAll();
		return userList.stream().map(user -> converter.toCompleteUserDto(user)).collect(Collectors.toList());
	}
	
	public UserDTO findUserByCreds(Credentials cred) {
		User u1 = userDao.findByEmail(cred.getEmail());		
		String password = cred.getPassword();
		if(u1 != null && passwordEncoder.matches(password,u1.getPassword()))
		{
			UserDTO resultUser  = converter.toCompleteUserDto(u1);
			return resultUser;
		}
		return null;
	}
	
	public UserDTO saveUser(UserDTO userDto) {
		if( userDao.findByEmail(userDto.getEmail()) != null ) {
			return null;
		}else {
			String rawPassword = userDto.getPassword();
			String encPassword = passwordEncoder.encode(rawPassword);
			userDto.setPassword(encPassword);
			userDto.setAddressId(1);
			userDto.setRoleId(2);
			User user = converter.toCompleteUserEntity(userDto);
			user = userDao.save(user);
			userDto = converter.toCompleteUserDto(user);
			return userDto;
		}
	}

	public UserDTO updateUserDetails(int userId, UserDTO userDto) {
		if(userDao.existsById(userId)) {
			int t = userDao.updateProfile(userId, userDto.getFirstName(), userDto.getLastName(), userDto.getEmail(), userDto.getContact(), userDto.getGender(), userDto.getRegDate(),userDto.getOccupation(),userDto.getGovtId(),userDto.getIncome());
			if (t == 0) {
				return null;
			}else {
				User u = userDao.getById(userId);
				UserDTO dto = converter.toCompleteUserDto(u);
				return dto;				
			}		
		}
		return null;
	}

	public String deleteUserById(int userId) {
		if(userDao.existsById(userId)) {
			User u = userDao.getById(userId);
			userDao.delete(u);
			return "User deleted successfully";
		}else {
			return null;
		}
	}
	public List<UserDTO> findAllParents() {
		
		List<User> userList = userDao.findByIdGreaterThan(1);
		
		return userList.stream().map(user -> converter.toCompleteUserDto(user)).collect(Collectors.toList());
	
	}

	

	public List<UserDTO> findParentsByName(String userName) {
     List<User> userList = userDao.findByFirstNameContaining(userName);
		
		return userList.stream().map(user -> converter.toCompleteUserDto(user)).collect(Collectors.toList());
	
	}

	public UserDTO findUserByUserFirstName(String userFirstName) {
		User user = userDao.findByFirstName(userFirstName);
		return converter.toCompleteUserDto(user);
	}

	public Map<String, Object> editParent(int id, UserDTO userdto) {
		if(userDao.existsById(id)) {
			userdto.setId(id);
			User user = converter.toCompleteUserEntity(userdto);
			user = userDao.save(user);
			return Collections.singletonMap("changedRows", 1);
		}
		return null;
	}

	

	public Map<String, Object> deleteParent(int id) {
		if(userDao.existsById(id)) {
			 userDao.deleteById(id);
			return Collections.singletonMap("affectedRows", 1);
		}
		return null;
	}

	public UserDTO updateUserPassword(UserDTO user){
		if(userDao.findByEmail(user.getEmail())!= null) {
			User oldUser = userDao.findByEmail(user.getEmail());
			UserDTO newDto = converter.toCompleteUserDto(oldUser );
			String rawPassword = user.getPassword();
			String encPassword = passwordEncoder.encode(rawPassword);
			newDto.setPassword(encPassword);
			User newUser = converter.toCompleteUserEntity(newDto);
			newUser = userDao.save(newUser);
			return converter.toCompleteUserDto(newUser);
		}else if(userDao.existsById(user.getId())){
			User oldUser = userDao.getById(user.getId());
			UserDTO newDto = converter.toCompleteUserDto(oldUser );
			String rawPassword = user.getPassword();
			String encPassword = passwordEncoder.encode(rawPassword);
			newDto.setPassword(encPassword);
			User newUser = converter.toCompleteUserEntity(newDto);
			newUser = userDao.save(newUser);
			return converter.toCompleteUserDto(newUser);
		}
		return null;
	}

	public UserDTO updateUserRole(int userId) {
		if(userDao.existsById(userId)) {
			User u = userDao.getById(userId);
			Role r  = new Role();
			if(u.getRole().getId()==2){
				r.setId(1);
				u.setRole(r);
			}
			else if(u.getRole().getId()==1) {
				r.setId(2);
				u.setRole(r);
			}
			
			UserDTO userDto = converter.toCompleteUserDto(u);
			return userDto;
		}
		else
			return null;
	}
	
}
