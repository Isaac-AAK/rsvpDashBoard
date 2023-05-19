package com.iaktech.rsvpDashBoard.Controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;

import com.iaktech.rsvpDashBoard.model.RsvpNotFoundException;

@ControllerAdvice
public class RsvpNotFoundHandler {
	
	public static Logger log = LoggerFactory.getLogger(RsvpNotFoundHandler.class);
	@ResponseBody
	@ExceptionHandler(RsvpNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String rsvpNotFoundHandler(RsvpNotFoundException ex) {
		log.info("Did not find rsvp");
	
		return ex.getMessage();
	}

}
