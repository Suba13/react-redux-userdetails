package programs;

public class Staticinner {
	static int a=20;
	static class inner{
		void ans(){
			System.out.println("a value is"+a);
		}
	}
	public static void main(String args[]){
		Staticinner.inner obj=new Staticinner.inner();
		obj.ans();
		
	}

}
