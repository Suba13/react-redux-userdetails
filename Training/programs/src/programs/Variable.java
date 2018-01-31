package programs;

public class Variable {
	 void srg(int ...a){
		 System.out.println("Number of arguments: " + a.length);
		 for (int i: a)
	      System.out.print(i + " ");
	        System.out.println();
	}
public static void main(String args[])
{
Variable v=new Variable();
	v.srg(5);
	v.srg(5,7,8);
	
}
}
