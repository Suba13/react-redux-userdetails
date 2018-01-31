package com.pho.main;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class Test {
public static void main(String[] args) {
	Resource r=new ClassPathResource("application-context.xml");  
    BeanFactory factory=new XmlBeanFactory(r); 
	Person pers = (Person) factory.getBean("pers");
	String res= pers.display();
}
}
