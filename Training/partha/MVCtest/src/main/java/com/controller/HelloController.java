package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.Interface.helloInterface;
import com.pojo.helloPojo;



@Controller
public class HelloController {

	@RequestMapping(value="/hai",method=RequestMethod.GET)
	public String getPage() {
    	System.out.println("hello");
       return "login";
	}
	@Autowired
	public helloInterface hello;
	@RequestMapping(value="/user",method=RequestMethod.POST)
	public String csucess(helloPojo pojo ) {
		System.out.println("hai");		
if(hello.checksucess(pojo))
	{
	System.out.println("home");
			return "home";
	};	
return "failure";
  	
  }


	

}
