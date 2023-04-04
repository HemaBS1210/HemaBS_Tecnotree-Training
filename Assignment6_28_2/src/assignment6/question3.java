addpackage assignment6;
import java.util.Scanner;
import java.util.TreeSet;
public class question3 {
	
	    public static void main(String[] args) {
	        TreeSet<Integer> set = new TreeSet<>();
	        Scanner scanner = new Scanner(System.in);
	        while (true) {
	            System.out.println("Enter a command (add, remove, display, quit):");
	            String command = scanner.nextLine();
	            if (command.equalsIgnoreCase("add")) {
	                System.out.println("Enter an integer to add:");
	                int num = scanner.nextInt();
	                scanner.nextLine(); // Consume newline left-over
	                set.add(num);
	                System.out.println("Set after adding " + num + ": " + set);
	            } else if (command.equalsIgnoreCase("remove")) {
	                System.out.println("Enter an integer to remove:");
	                int num = scanner.nextInt();
	                scanner.nextLine(); // Consume newline left-over
	                boolean removed = set.remove(num);
	                if (removed) {
	                    System.out.println("Set after removing " + num + ": " + set);
	                } else {
	                    System.out.println(num + " not found in set.");
	                }
	            } else if (command.equalsIgnoreCase("display")) {
	                System.out.println("Current set: " + set);
	            } else if (command.equalsIgnoreCase("quit")) {
	                System.out.println("Goodbye!");
	                break;
	            } else {
	                System.out.println("Invalid command. Try again.");
	            }
	        }
	        scanner.close();
	    }
	}
