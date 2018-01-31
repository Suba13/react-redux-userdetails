package programs;

public class Overloading {
	public void ans(int a){
		System.out.println("value a is "+a);
	}
	public void ans(char a){
		System.out.println("value a is "+a);
	}
	public void ans(String a){
		System.out.println("value a is "+a);
	}
public static void main(String args[]){
	Overloading obj=new Overloading();
	obj.ans(50);
	obj.ans('f');
	obj.ans("suba");

}
}
