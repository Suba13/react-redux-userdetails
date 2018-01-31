package programs;
import java.util.Scanner;  
public class Onedi {
	public static void main(String args[])
	{
		Scanner reader = new Scanner(System.in);  
        System.out.println("Enter a String: ");
       String s = reader.nextLine(); 
        char array[]=s.toCharArray();
        System.out.println("Array value");
		for(int i=0;i<array.length;i++){
			
			System.out.println(array[i]);
			
		
		}
		    
		reader.close(); 
		
	}

}
