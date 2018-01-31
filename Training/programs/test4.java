class test4{
  static int age;

  //This is a Static Method
  public void disp(){
      System.out.println("Age is: "+age);
   
  }
   // This is also a static method
  public static void main(String args[]) 
  { test3 obj1=new test3();
	  obj1.disp();
  }
}