 import java.util.Scanner;  
public class Patternalp2
{
        public static void printTriagle(int n)
    {
		int alphabet=65; 
          int k = 2*n - 2;
        
        for (int i=0; i<n; i++)
        {          
            for (int j=0; j<k; j++)
            {
                  System.out.print(" ");
            }
             k = k - 1;
           for (int j=0; j<=i; j++ )
            {
                
                System.out.print((char)alphabet+" ");
			    alphabet++;
            }
            System.out.println();
        }
		 for (int i=n-1; i>0; i--)
        {          
            for (int j=0; j<=k+1; j++)
            {
                  System.out.print(" ");
            }
             k = k + 1;
           for (int j=0; j<=i-1; j++ )
            {
                
                System.out.print((char)alphabet+" ");
			    alphabet++;
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