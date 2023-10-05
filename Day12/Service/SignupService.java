package com.midhun.bookmystay.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.midhun.bookmystay.Entity.Signup;
import com.midhun.bookmystay.Repository.SignupRepository;

import io.swagger.v3.oas.annotations.servers.Server;

@Server
@Service
public class SignupService {
	@Autowired 
	SignupRepository repo;
	public Iterable<Signup> GetAll(){
		return repo.findAll();
	}

}
