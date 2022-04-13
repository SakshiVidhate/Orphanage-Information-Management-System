package com.app.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

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

import com.app.dtos.Credentials;
import com.app.dtos.Response;
import com.app.dtos.UserDTO;
import com.app.services.UserServiceImpl;



@RestController
@CrossOrigin(origins = "*")
public class UserControllerImpl {

	@Autowired
	private UserServiceImpl userService;

	@GetMapping("/user/all")
	public ResponseEntity<?> getAllUsers() {
		List<UserDTO> list = userService.findAllUsers();
		return Response.success(list);
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<?> GetUserDetailsById(@PathVariable("id") int id){
		UserDTO userDto = userService.findUserByID(id);
		if(userDto == null)
			return Response.error("User not found");
		return Response.success(userDto);
	}

	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@Valid @RequestBody Credentials cred){
		UserDTO userDto=userService.findUserByCreds(cred);
				if(userDto==null)
					return Response.error("user not found");
		return Response.success(userDto);
	}
	@PostMapping("/user/{id}")
	public ResponseEntity<?> updateProfile(@PathVariable("id") int id, @RequestBody UserDTO userDto){
		UserDTO result = userService.updateUserDetails(id, userDto);
		if(result == null)
			return Response.error("User not found");
		return Response.success(result);
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteUserById(@PathVariable("id")int id){
		String result = userService.deleteUserById(id);
		if(result == null)
			return Response.error("User not found");
		return Response.success(result);
	}
	@PostMapping("/user/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto){
		UserDTO result = userService.saveUser(userDto);
		if(result == null) 
			return Response.error("This email-id is aready used");
		else
			return Response.success(result);
	}
	
	@GetMapping("/parents/all")
	public ResponseEntity<?> getAllParents() {
		List<UserDTO> list = userService.findAllParents();
		return Response.success(list);
	}
	
	@GetMapping("/user/search")
	public ResponseEntity<?> findParents(@RequestParam(name="userName",defaultValue="")String userName,HttpServletResponse resp){
		List<UserDTO> result=new ArrayList<>();
		if(!userName.isEmpty())
			result=userService.findParentsByName(userName);
		else
			result = userService.findAllParents();
		return Response.success(result);
	}
	
//	@GetMapping("/user/{userFirstName}")
//	public ResponseEntity<?> findParentByParentName(@PathVariable("userFirstName") String userFirstName) {
//		UserDTO result = userService.findUserByUserFirstName(userFirstName);
//		return Response.success(result);
//	}
	@PutMapping("/user/{id}")
	public ResponseEntity<?> changeRole(@PathVariable("id") int id){
		UserDTO result = userService.updateUserRole(id);
		if(result == null) 
			return Response.error("User of this id does not exist");
		else
			return Response.success(result);
	}

	
	
	@PostMapping("/user/updatePassword")
	public ResponseEntity<?> updatePassword(@RequestBody UserDTO userDto){
		UserDTO result = userService.updateUserPassword(userDto);
		if(result == null)
			return Response.error("User not found");
		return Response.success(result);
	}

}
