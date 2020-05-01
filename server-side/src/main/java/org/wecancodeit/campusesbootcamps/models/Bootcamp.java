package org.wecancodeit.campusesbootcamps.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Bootcamp {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	@ManyToOne
	@JsonIgnore
	private Campus campus;

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Campus getCampus() {
		return campus;
	}

	public Bootcamp() {
	} // why jpa why???

	public Bootcamp(String name, Campus campus) {
		this.name = name;
		this.campus = campus;
	}

	@Override
	public String toString() {
		return "Bootcamp [name=" + name + ", campus=" + campus + "]";
	}

}
