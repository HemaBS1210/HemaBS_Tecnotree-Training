
package com.tecnotree.gcdprogram;
public class revString {
    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    public static void main(String[] args) {
        String s = "Hello, world!";
        System.out.println(reverseString(s)); // Output: "!dlrow ,olleH"
    }
}
