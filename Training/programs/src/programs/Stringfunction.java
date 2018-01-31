package programs;

public class Stringfunction {
public static void main(String args[])
{
	String s1="suba";
	String s2="suba";
	String s3="dharshini";
	String s4="welcome to photon";
	String s5="HII PHOTON";
	int counter = s3.length() - s3.replace("i", "").length();
	System.out.println("The no of occurance of a in second string"+counter);
	System.out.println("String Comparison s1 and s2 " +s1.compareTo(s2));
	System.out.println("String Comparison s1 and s3 "+s1.compareTo(s3));
	System.out.println("String Concatination s1 and s3 "+s1.concat(s3));
	System.out.println("String Length s1  "+s1.length());
	System.out.println("6th position in string  s3  "+s3.charAt(8));
	System.out.println("subString in s4  "+s4.substring(10));
	System.out.println("string replace  s4  "+s4.replace('o', 'T'));
	System.out.println("Testing begging index in s4  "+s4.startsWith("welcome") );
	System.out.println("string to lower case  s5  "+s5.toLowerCase());
	System.out.println("'i' occurence in string s3 "+counter);
}
}
