class test1{
  static int age=30;
  int a=0;
  //This is a Static Method
  static void disp(){
      System.out.println("Age is: "+age);
      System.out.println("a value:"+a);
  }
  // This is also a static method
  public static void main(String args[]) 
  {
	  
      disp();
  }
}