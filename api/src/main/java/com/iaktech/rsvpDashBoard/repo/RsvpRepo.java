package com.iaktech.rsvpDashBoard.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iaktech.rsvpDashBoard.model.RsvpEntity;

@Repository
public interface RsvpRepo extends JpaRepository<RsvpEntity, Long> {

}
