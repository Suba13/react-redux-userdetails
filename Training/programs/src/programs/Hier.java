package programs;
class ara{
	void ans1(){
		System.out.println("suba");
	}
}
class name1 extends ara{
	void ans2(){
		System.out.println("dharshini");
	}
}
class name2 extends ara{
	void ans3(){
		System.out.println("balasubramaniyan");
	}
}
public class Hier  {
	public static void main(String args[])
	{
		name2 obj1=new name2();
		obj1.ans3();
		obj1.ans1();
		
	}
}
