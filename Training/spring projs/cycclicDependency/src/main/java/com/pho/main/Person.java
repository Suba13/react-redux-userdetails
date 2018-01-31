package com.pho.main;

public class Person {
private String name;
private Address address;

public String display(){
	String addr = address.show();
	return name +"....." + addr;
}
public Person(String name, Address address) {
	super();
	this.name = name;
	this.address = address;
}

}
