package programs;

public class Localinner {
	int a=20;
	void ans(){
		class Inner{
			void value(){
			System.out.println("a value is "+a);
			}
		}
		Inner obj=new Inner();
		obj.value();
	}
public static void main(String args[])
{
Localinner obj1=new Localinner();
obj1.ans();
}
}
