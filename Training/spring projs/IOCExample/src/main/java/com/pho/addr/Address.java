package com.pho.addr;

public class Address {
	private String name;
	private int pin;
	private String city;
	public Address(String name, int pin, String city) {
		super();
		this.name = name;
		this.pin = pin;
		this.city = city;
	}
	@Override
	public String toString() {
		return "Address [name=" + name + ", pin=" + pin + ", city=" + city
				+ "]";
	}
	

}
