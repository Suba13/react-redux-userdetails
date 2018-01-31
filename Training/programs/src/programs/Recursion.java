package programs;

public class Recursion {
    int fact(int n)
	{
		if(n==1)
			return 1;
		else
			return(n*fact(n-1));
	}
	public static void main(String args[])
	{
		Recursion v=new Recursion();
		System.out.println("The recursion value"+v.fact(5));
		
	}

}
