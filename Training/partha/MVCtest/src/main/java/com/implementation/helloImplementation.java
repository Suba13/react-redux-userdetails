package com.implementation;

import org.springframework.stereotype.Service;

import com.Interface.helloInterface;
import com.pojo.helloPojo;
@Service
public class helloImplementation implements helloInterface{
	public Boolean checksucess(helloPojo pojo)
	{
		if(pojo.getUsername().equals("partha")&& pojo.getPassword().equals("partha"))
		{
			System.out.println("success");
			return true;
		}
		else
		{
			System.out.println("failure");
			return false;
		}
	}
}
