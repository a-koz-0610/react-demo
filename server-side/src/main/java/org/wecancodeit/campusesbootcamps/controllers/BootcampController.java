package org.wecancodeit.campusesbootcamps.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.campusesbootcamps.models.Bootcamp;
import org.wecancodeit.campusesbootcamps.repositories.BootcampRepository;


@CrossOrigin
@RestController
@RequestMapping("/bootcamps")
public class BootcampController {

	@Resource
	private BootcampRepository bootcampRepo;

	@GetMapping("")
	public Collection<Bootcamp> getBootcamps() {
		return (Collection<Bootcamp>) bootcampRepo.findAll();
	}

}
