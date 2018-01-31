package programs;
import java.util.Scanner;   
class Twodi {
public static void main(String args[])
{
int i,j,row,column;
char array[][] = new char[10][10];
Scanner reader = new Scanner(System.in);  
System.out.println("Enter a String: ");
String str = reader.nextLine(); 
   System.out.print("Enter row number: ");
   row = reader.nextInt();
   System.out.print("Enter column number: ");
   column = reader.nextInt();
     char arrayval[] =new char[100];
   arrayval=str.toCharArray();
   int k=0;
   for(i=0; i<row; i++)
   {
	   
       	for(j=0; j<column; j++)
       	{
           array[i][j] =arrayval[k];
           k++;
       	}
   	}
   System.out.print("Array elements are: \n");
   for(i=0; i<row; i++)
   {
       for(j=0; j<column; j++)
       {
       	System.out.print(array[i][j]+" ");
       }
       System.out.println();
   }
   reader.close();
}
}
