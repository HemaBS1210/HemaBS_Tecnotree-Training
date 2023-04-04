package com.tecnotree.varprogram;

import java.util.Scanner;

public class smallest {
	public static void main(String[] args)
	{
        Scanner in = new Scanner(System.in);
		
		System.out.println("Enter first number :");
        int num1 = in.nextInt();
        System.out.println("Enter second number :");
        int num2 = in.nextInt();
        
        if(num1<num2)
        {
        	System.out.println("First number is smaller than Second");
        }
        else
        	System.out.println("Second number is smaller than First");
        	

}

}

