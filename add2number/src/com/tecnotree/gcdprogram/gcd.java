package com.tecnotree.gcdprogram;

public class gcd {
	
	public static  int gcd(int a, int b) {
	    if (b == 0) {
	        return a;
	    } else {
	        return gcd(b, a % b);
	    }
	    
	}
	public static void main(String[] args)
	{
		int a = 18;
	    int b = 12;
	    System.out.println(gcd(a, b)); 
	   
		
	}


}
