package org.wecancodeit.campusesbootcamps;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.campusesbootcamps.models.Bootcamp;
import org.wecancodeit.campusesbootcamps.models.Campus;
import org.wecancodeit.campusesbootcamps.repositories.BootcampRepository;
import org.wecancodeit.campusesbootcamps.repositories.CampusRepository;

@Component
public class Populator implements CommandLineRunner {

	@Resource
	private CampusRepository campusRepo;

	@Resource
	private BootcampRepository bootcampRepo;

	@Override
	public void run(String... args) throws Exception {

		Campus columbus = new Campus("Columbus");
		Campus cleveland = new Campus("Cleveland");

		campusRepo.save(columbus);
		campusRepo.save(cleveland);

		Bootcamp flexcodeCbus = new Bootcamp("FlexCode Columbus", columbus);
		Bootcamp flexcodeCle = new Bootcamp("FlexCode Cleveland", cleveland);
		Bootcamp cSharp = new Bootcamp("cSharp", cleveland);
		Bootcamp javaScript = new Bootcamp("JavaScript", columbus);
		Bootcamp java = new Bootcamp("Java", columbus);

		bootcampRepo.save(flexcodeCbus);
		bootcampRepo.save(flexcodeCle);
		bootcampRepo.save(cSharp);
		bootcampRepo.save(javaScript);
		bootcampRepo.save(java);

	}

}
