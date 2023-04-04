package multi;

import java.util.Scanner;
public class multi{
		public static void main(String[] args)
		{
	        Scanner in = new Scanner(System.in);
			
			//System.out.println("Enter first number :");
	        int num = in.nextInt();
	        
	        for(int i=0;i<=610;i++)
	        {
	        	System.out.println(num+ "*" +i+ "="  +num*i);
	        }

}
	}