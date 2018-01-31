package programs;
abstract class ana{
	int a=10;
	abstract void ans();
}
public class Ainnerclass {
	public static void main (String args[]){
		ana a=new ana()
		{
			void ans(){
				System.out.println("value of a is"+a);
			}
		};
		a.ans();
		
		
	}

}
