package com.midhun.bookmystay.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.midhun.bookmystay.Entity.Bookmystay;
import com.midhun.bookmystay.Repository.BookmystayRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/Bookmystay")
public class BookmystayController {

    @Autowired
    private BookmystayRepository bookmystayRepository;
    @GetMapping(value="/get")
    public Iterable<Bookmystay> getAllBookmystay(){
        return bookmystayRepository.findAll();
    }
    	
   
    @PostMapping("/post")
    public Bookmystay createtata(@RequestBody Bookmystay ad) {
        return bookmystayRepository.save(ad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Bookmystay>> getById(@PathVariable  Long id){
        Optional<Bookmystay> ac = bookmystayRepository.findById(id);
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
	public Bookmystay updateBookmystayDetails(@RequestBody Bookmystay b,@PathVariable Long id)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		
		b.setid(id);
		return bookmystayRepository.save(b);		
	}
    @DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable Long id)
	{
    	bookmystayRepository.deleteById(id);
		return null;
	}
}