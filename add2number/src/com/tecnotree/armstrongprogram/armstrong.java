package com.tecnotree.armstrongprogram;

public class armstrong {
	public static void main(String[] args)
	{
		int sum, temp,order=0, digit;
		int num = 153;
		
		sum = 0;
		temp = num;
		order = String.valueOf(num).length();

		while (temp > 0) {
			digit = temp % 10;
			sum += Math.pow(digit, order);
			temp /= 10;
			}
		if (num == sum)
		    System.out.println("Armstrong number");
		else
			System.out.println(" not an Armstrong number");
				    
	}

}
