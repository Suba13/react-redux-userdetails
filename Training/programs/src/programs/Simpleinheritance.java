package programs;
class superclass{
	int a=10;
}

public class Simpleinheritance extends superclass {
	int c=5;
	public static void main(String args[])
	{
		Simpleinheritance obj1=new Simpleinheritance();
		System.out.println("value of a" +obj1.a);
		System.out.println("value c is " +obj1.c);
	}

}
