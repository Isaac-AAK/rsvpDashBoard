package com.iaktech.rsvpDashBoard.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.iaktech.rsvpDashBoard.model.Rsvp;
import com.iaktech.rsvpDashBoard.model.RsvpNotFoundException;
import com.iaktech.rsvpDashBoard.repo.RsvpRepo;

import jakarta.persistence.PostLoad;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class RsvpController {
	public static Logger log = LoggerFactory.getLogger(RsvpController.class);
	@Autowired
	private RsvpRepo repo;
	
	@GetMapping(value = "/rsvps")
	public ResponseEntity<List<Rsvp>> getRsvp(){
		
		ResponseEntity<List<Rsvp>> response =new ResponseEntity<>(repo.findAll(),HttpStatus.OK);
		return response;
	}
	
	@PostMapping(value = "/rsvps/add")
	public void addRsvp(Rsvp rsvp) {
			repo.save(rsvp);
	}
	
	
	@GetMapping(value = "/rsvps/{id}")
	public ResponseEntity<Rsvp> getRsvpById(@PathVariable long id){
		
		return new ResponseEntity<>(repo.findById(id).orElseThrow(() ->
		new RsvpNotFoundException(id)),HttpStatusCode.valueOf(200));
	}
	
	@PutMapping("/rsvps/{id}")
	public Rsvp updateRsvp(@RequestBody Rsvp newRsvp, @PathVariable Long id) {
		
		return repo.findById(id)
				.map(rsvp -> {
			rsvp.setName(newRsvp.getName());
			rsvp.setContact(newRsvp.getContact());
			rsvp.setNumberOfGuest(newRsvp.getNumberOfGuest());
			return repo.save(rsvp);
		}).orElseGet(() ->{
			newRsvp.setId(id);
			return repo.save(newRsvp);
		});
	}

	
	@RequestMapping(value = "/rsvps/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Rsvp> deleteId(@PathVariable long id) {
		repo.deleteById(id);
		Map<String, String> responseMessage = new HashMap<>();
		responseMessage.put("Delete", "Success");
		log.info("Delete Success");
		return new ResponseEntity<>(HttpStatusCode.valueOf(200));
	}

}
