package test;
import java.util.Scanner;

public class student {
	

	    public static void main(String[] args) {
	        Scanner sc = new Scanner(System.in);
	        
	     
	        String[][] students = new String[10][3];
	        
	        
	        for (int i = 0; i < 10; i++) {
	            System.out.println("Enter details of student " + (i+1) + ":");
	            System.out.print("Name: ");
	            students[i][0] = sc.nextLine();
	            System.out.print("Age: ");
	            students[i][1] = sc.nextLine();
	            System.out.print("Grade: ");
	            students[i][2] = sc.nextLine();
	        }
	        
	        System.out.println("\nDetails of all the students:");
	        for (int i = 0; i < 10; i++) {
	            System.out.println("Name: " + students[i][0]);
	            System.out.println("Age: " + students[i][1]);
	            System.out.println("Grade: " + students[i][2]);
	            System.out.println();
	        }
	        
	        sc.close();
	    }
	}


