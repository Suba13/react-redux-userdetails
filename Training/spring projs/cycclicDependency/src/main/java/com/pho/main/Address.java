package com.pho.main;

public class Address {
	private String dist;
	private Person person;
	
public Address(String dist, Person person) {
		super();
		this.dist = dist;
		this.person = person;
	}

public String show(){
	String pers = person.display();
return "result "+ dist + "......"+pers ;
}

}
