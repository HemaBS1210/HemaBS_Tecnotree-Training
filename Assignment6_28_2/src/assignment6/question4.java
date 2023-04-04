package assignment6;
import java.util.LinkedList;
import java.util.Scanner;

public class question4 {
	
	    public static void main(String[] args) {
	        LinkedList<String> queue = new LinkedList<String>();
	        Scanner scanner = new Scanner(System.in);
	        while (true) {
	            System.out.println("Enter 1 to add an item, 2 to remove an item, or 3 to exit:");
	            int choice = scanner.nextInt();
	            if (choice == 1) {
	                System.out.println("Enter the item to be added:");
	                String item = scanner.next();
	                queue.add(item);
	                System.out.println("Queue after adding item: " + queue);
	            } else if (choice == 2) {
	                if (queue.isEmpty()) {
	                    System.out.println("Queue is empty");
	                } else {
	                    String removedItem = queue.remove();
	                    System.out.println("Removed item from queue: " + removedItem);
	                    System.out.println("Queue after removing item: " + queue);
	                }
	            } else if (choice == 3) {
	                break;
	            } else {
	                System.out.println("Invalid choice, try again.");
	            }
	        }
	    }
	}
