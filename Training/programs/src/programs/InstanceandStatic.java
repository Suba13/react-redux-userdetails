package programs;

public class InstanceandStatic {
	static int a=20;
	int b=50; 
	void value(){
		System.out.println("value of a is "+a);
		System.out.println("value of b is "+b);
	}
	static void ans()
	{
		System.out.println("value of a is "+a);
		
	}
	public static void main(String args[])
	{
		//InstanceandStatic obj=new InstanceandStatic();
			ans();
			//obj.value();
	}

}
