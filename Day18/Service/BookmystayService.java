package com.midhun.bookmystay.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.midhun.bookmystay.Entity.Bookmystay;
import com.midhun.bookmystay.Repository.BookmystayRepository;


@Service
public class BookmystayService {

	@Autowired
	BookmystayRepository bookmystayRepository;
	
	public List<Bookmystay> getAllBookmystay() {
		return bookmystayRepository.findAll();
	}
	
	public Bookmystay getbookmystayById(Long bookmystayId) {
		Optional<Bookmystay> bookmystayOptional = bookmystayRepository.findById(bookmystayId);
		return bookmystayOptional.orElse(null);
	}
	
	public Bookmystay savebookmystay(Bookmystay bookmystay) {
		return bookmystayRepository.save(bookmystay);
	}
	
	public void deletebookmystay(Long bookmystayId) {
		bookmystayRepository.deleteById(bookmystayId);
	}
}
