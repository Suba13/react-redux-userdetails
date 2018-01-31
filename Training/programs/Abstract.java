abstract class Animal{
   
   public abstract void sound();
   {
   System.out.println("Abstract class");
   }
}

public class Abstract extends Animal{

   public void sound(){
	System.out.println("Extended class");
   }
   public static void main(String args[]){
	Animal obj = new Abstract();
	obj.sound();
   }
}