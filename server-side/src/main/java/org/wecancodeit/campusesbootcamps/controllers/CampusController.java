package org.wecancodeit.campusesbootcamps.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.campusesbootcamps.models.Campus;
import org.wecancodeit.campusesbootcamps.repositories.CampusRepository;

@CrossOrigin
@RestController
@RequestMapping("/campuses")
public class CampusController {

	@Resource
	private CampusRepository campusRepo;

	@GetMapping("")
	public Collection<Campus> getCampuses() {
		return (Collection<Campus>) campusRepo.findAll();
	}

}
