package com.iaktech.rsvpDashBoard.model;



public class RsvpNotFoundException extends RuntimeException {
	
	public RsvpNotFoundException(Long id) {
		super("Rsvp not Found:  " + id);
	}
}
