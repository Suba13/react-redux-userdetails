class test2{
  static int age=30;
  int ans=10;
  //This is a Static Method
  static void disp(){
      System.out.println("Age is: "+age);
   
  }
  public void value(){
      System.out.println("Ans is: "+ans);
   
  }
  // This is also a static method
  public static void main(String args[]) 
  {
	  value();
      disp();
  }
}