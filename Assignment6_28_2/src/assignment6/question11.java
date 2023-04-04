package assignment6;
import java.util.ArrayList;
import java.util.Scanner;

public class question11 {
	
	
	    public static void main(String[] args) {
	        
	        // Create an ArrayList to store the names
	        ArrayList<String> nameList = new ArrayList<>();
	        
	        // Create a scanner object to read user input
	        Scanner scanner = new Scanner(System.in);
	        
	        // Loop until the user chooses to exit
	        while (true) {
	            
	            // Display the current list of names
	            System.out.println("Current list of names: " + nameList);
	            
	            // Prompt the user to choose an action
	            System.out.println("Enter 'add' to add a name, 'remove' to remove a name, or 'exit' to quit:");
	            String action = scanner.nextLine();
	            
	            // Exit the loop if the user chooses to exit
	            if (action.equals("exit")) {
	                break;
	            }
	            
	            // Add a name to the list if the user chooses to add
	            else if (action.equals("add")) {
	                System.out.println("Enter the name to add:");
	                String name = scanner.nextLine();
	                nameList.add(name);
	            }
	            
	            // Remove a name from the list if the user chooses to remove
	            else if (action.equals("remove")) {
	                System.out.println("Enter the name to remove:");
	                String name = scanner.nextLine();
	                nameList.remove(name);
	            }
	            
	            // Display an error message if the user enters an invalid action
	            else {
	                System.out.println("Invalid action. Please try again.");
	            }
	        }
	        
	        // Display the final list of names
	        System.out.println("Final list of names: " + nameList);
	    }
	}

