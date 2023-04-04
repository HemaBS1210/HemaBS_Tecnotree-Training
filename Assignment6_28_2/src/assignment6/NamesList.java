package assignment6;
import java.util.ArrayList;
import java.util.Scanner;
public class NamesList {

	    public static void main(String[] args) {
	        ArrayList<String> namesList = new ArrayList<String>();
	        Scanner scanner = new Scanner(System.in);

	        while (true) {
	            System.out.println("Enter an option (add/remove/exit):");
	            String option = scanner.nextLine();

	            if (option.equals("add")) {
	                System.out.println("Enter a name to add:");
	                String name = scanner.nextLine();
	                namesList.add(name);
	                System.out.println("Updated names list: " + namesList);
	            } else if (option.equals("remove")) {
	                System.out.println("Enter a name to remove:");
	                String name = scanner.nextLine();
	                namesList.remove(name);
	                System.out.println("Updated names list: " + namesList);
	            } else if (option.equals("exit")) {
	                break;
	            } else {
	                System.out.println("Invalid option, try again.");
	            }
	        }

	        scanner.close();
	    }
	}


