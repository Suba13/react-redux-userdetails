class test3{
  static int age=30;
  int ans;
  //This is a Static Method
  static void disp(){
      System.out.println("Age is: "+age);
   
  }
  public void value(){
	  int ans;
      System.out.println("Ans is: "+ans);
   
  }
  // This is also a static method
  public static void main(String args[]) 
  { test3 obj1=new test3();
	  obj1.value();
      disp();
  }
}