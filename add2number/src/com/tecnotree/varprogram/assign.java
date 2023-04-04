package com.tecnotree.varprogram;
import java.util.Scanner;

public class assign {
	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		
		System.out.println("Enter first number :");
        int num1 = in.nextInt();
        System.out.println("Enter second number :");
        int num2 = in.nextInt();
        boolean grater = num1 > num2;
        boolean lesser = num1 < num2;
        boolean equall = (num1 == num2);
        System.out.println("grater : "         + grater);
        System.out.println("lesser : "  + lesser);
        System.out.println("equall : " + equall);
        
	}

}
