package multi;
import java.util.Scanner;
public class cal {
	public static void main(String[] args)
	{
        Scanner in = new Scanner(System.in);
		
		System.out.println("Enter first number :");
        int a = in.nextInt();
        System.out.println("Enter second number :");
        int b = in.nextInt();
		System.out.println("operators like + - * /");
		char operator = in.next().charAt(0);
		
		
		
		switch(operator)
		{
		case '+' :
			System.out.println("a+b:" +(a+b));
			break;
		case '-' :
			System.out.println("a-b: " +(a-b));
			break;
		case '*' :
			System.out.println("a*b : " +(a*b));
			break;
		case '/' :
			System.out.println("a/b: "+(a/b));
			break;
			
		case '%' :
			System.out.println("a%b : " +(a%b));
			
			break;
			
		
			
			
		}
	}
	
	}
