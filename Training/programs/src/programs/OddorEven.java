package programs;
import java.util.Scanner; 
public class OddorEven {
	 OddorEven(int n)
	{
		if(n%2==0)
		System.out.println("Number is even");
		else
		System.out.println("Number is odd");
		
                                                   
	}
	public static void main(String args[])
	{
		Scanner reader = new Scanner(System.in);  
		System.out.println("Enter a number: ");
		int n = reader.nextInt();
		OddorEven obj=new OddorEven(n);
		reader.close();
		
	}

}
