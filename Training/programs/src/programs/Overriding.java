package programs;
 class Overriding1 {
	void ans(int a,int b){
		System.out.println("value a is "+a+" value b is " +b);
	}
	
}

 class  Overriding extends Overriding1{
	 void ans(int a,int b){
		 System.out.println("value c is "+a+" value d  is"+b);
	 }
	public static void main(String args[])
	{
		Overriding1 obj=new Overriding1();
		Overriding obj1=new Overriding();
		obj.ans(5,6);
		obj1.ans(7, 8);
		
	}
}
