 import java.util.Scanner;  
public class Pattern4
{
        public static void printTriagle(int n)
    {
       
        
        for (int i=0; i<n; i++)
        {          
            for (int j=0; j<n; j++)
            {
                  System.out.print(" ");
            }
      
           for (int j=0; j<=n; j++ )
            {
                
                System.out.print("* ");
            }
            System.out.println();
        }
		 		
    }
    
    public static void main(String args[])
    {
       Scanner reader = new Scanner(System.in);  
        System.out.println("Enter a number: ");
       int n = reader.nextInt(); 
        printTriagle(n);
    }
}