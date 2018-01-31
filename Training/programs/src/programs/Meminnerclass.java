package programs;

public class Meminnerclass {
	int a=10;
class inner{
	 void ans(){System.out.println("a is "+a);}
}
public static void main(String args[])
{
	Meminnerclass obj1 =new Meminnerclass();
	Meminnerclass.inner obj2 =obj1.new inner();
	obj2.ans();
}
}



