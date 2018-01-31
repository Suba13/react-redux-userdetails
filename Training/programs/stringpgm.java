import java.util.Scanner;  
public class stringpgm{
 public static void main(String args[])
    {
		Scanner reader = new Scanner(System.in);  
        System.out.println("Enter a String: ");
       String s = reader.nextLine(); 
        char array[]=s.toCharArray();
		char arr[]=s.toCharArray(); 
		char first ='a';
		
		for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i+1]) {
		 first = arr[i];
			arr[i]= '#';
			arr[i+1]= '@';
			 }
    }
        for (int i = 0; i < arr.length; i++) {
        if (first == arr[i]) {
		arr[i]= '#';
		
		System.out.println("original String:");
		System.out.println(array);
		System.out.println("Modified String:");
		System.out.println(arr);
        }
    }
  
    }
}