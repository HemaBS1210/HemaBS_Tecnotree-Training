package com.tecnotree.posprogram;

import java.util.Scanner;

public class pos {
	public static void main(String[] args)
	{
        Scanner in = new Scanner(System.in);
		
		System.out.println("Enter first number :");
        int num1 = in.nextInt();
        if(num1>0)
        	System.out.println("positive");
        else if(num1<0)
        	System.out.println("negative");
        else
        	System.out.println("Equal to zero");
        	
        

}
}
