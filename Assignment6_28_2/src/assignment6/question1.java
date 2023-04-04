package assignment6;
import java.util.ArrayList;
import java.util.Scanner;
public class question1 {
	
	        ArrayList<String> namesList = new ArrayList<String>();
	        Scanner scanner = new Scanner(System.in);
	        String input;
	        {

	        while (true) {
	            System.out.println("Enter 'a' to add a name, 'r' to remove a name, or 'q' to quit:");
	            input = scanner.nextLine().toLowerCase();

	            if (input.equals("a")) {
	                System.out.println("Enter the name you want to add:");
	                input = scanner.nextLine();
	                namesList.add(input);
	            } else if (input.equals("r")) {
	                System.out.println("Enter the index of the name you want to remove:");
	                int index = scanner.nextInt();
	                scanner.nextLine(); // consume the newline character
	                namesList.remove(index);
	            } else if (input.equals("q")) {
	                break;
	            } else {
	                System.out.println("Invalid input. Try again.");
	            }

	            System.out.println("Current list of names:");
	            for (String name : namesList) {
	                System.out.println(name);
	            }
	        }

	        System.out.println("Goodbye!");
	    }
	}


