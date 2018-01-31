package programs;
class name{
	int a=70;
}
class subclass extends name{
	String s="suba";
}
public class Multilevel extends subclass {
	char b='M';
	public static void main(String args[])
	{
		Multilevel obj1=new Multilevel();
		System.out.println("value of a" +obj1.a);
		System.out.println("string s is " +obj1.s);
		System.out.println("char b is " +obj1.b);
	}
}
