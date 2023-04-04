package com.tecnotree.palindromeprogram;

public class palindrome {
	public static void main(String[] args) {
		int z = 123;
		int rem,sum=0;
		//int a = length(z);
		//for(i=0;i<=a;i++)
		while(z>0)
		{
			rem = z%10;//3
			z=z/10; //12,
			sum = sum*10 + rem;//
			
		}
		
		System.out.println("reverse number = " +sum);
		if(sum==z) {
			System.out.println("palindrome");
			
		}
		else
		{
			System.out.println("not a palindrome");
		}
		 
		
	}

}
