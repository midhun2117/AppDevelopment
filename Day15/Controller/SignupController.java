package com.midhun.bookmystay.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.midhun.bookmystay.Entity.Signup;
import com.midhun.bookmystay.Repository.SignupRepository;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController

@RequestMapping("/sign")
public class SignupController {
	@Autowired 
	SignupRepository repo;
	@PostMapping("/post")
	private Signup createPostUser(@RequestBody Signup s){
		return repo.save(s);
	}


}
