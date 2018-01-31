package com.pho.main;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;

import com.pho.ser.Employee;

public class Main {
public static void main(String[] args) {
	Resource r=new ClassPathResource("application-context.xml");  
    BeanFactory factory=new XmlBeanFactory(r); 
	Employee emp= (Employee) factory.getBean("Employee");
	emp.show();
}
}
