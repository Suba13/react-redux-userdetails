package programs;
interface a{
	void hello();
}
interface b{
	void hi();
}
public class Inter implements a,b {
	public void hello(){System.out.println("hello");}
    public void hi(){System.out.println("hii");}
	public static void main(String args[])
	{
		Inter i=new Inter();
		i.hello();
		i.hi();		
	}

}
