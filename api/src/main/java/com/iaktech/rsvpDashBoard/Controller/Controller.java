package com.iaktech.rsvpDashBoard.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iaktech.rsvpDashBoard.model.RsvpEntity;
import com.iaktech.rsvpDashBoard.repo.RsvpRepo;

@RestController
@RequestMapping("api/v1/rsvps")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
	
	@Autowired
	private RsvpRepo repo;
	
	@GetMapping
	public List<RsvpEntity> getRsvp(){
		return repo.findAll();
	}

}
