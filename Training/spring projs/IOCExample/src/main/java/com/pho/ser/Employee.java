package com.pho.ser;

import com.pho.addr.Address;

public class Employee {
	private String company;
	private int empcode;
	private Address address;
	public Employee(String company, int empcode, Address address) {
		super();
		this.company = company;
		this.empcode = empcode;
		this.address = address;
	}
	public void show(){
		System.out.println("company name :"+company+"empcode :"+empcode);
		System.out.println("addressss :"+address .toString());
	}

}
