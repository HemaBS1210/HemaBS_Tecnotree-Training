package assignment6;
import java.util.*;
public class question2 {
	


	    public static void main(String[] args) {

	        // create a new HashMap to store the dictionary
	        HashMap<String, String> dictionary = new HashMap<>();

	        // add some initial words and meanings to the dictionary
	        dictionary.put("apple", "a round fruit with red or green skin and a white inside");
	        dictionary.put("banana", "a long, curved fruit with yellow skin and a soft inside");
	        dictionary.put("orange", "a round fruit with a tough, shiny orange skin and a sweet, juicy inside");

	        // create a new Scanner to get user input
	        Scanner scanner = new Scanner(System.in);

	        // loop indefinitely to allow the user to enter words and get their meanings
	        while (true) {

	            // prompt the user to enter a word
	            System.out.print("Enter a word (or 'quit' to exit): ");
	            String word = scanner.nextLine();

	            // check if the user wants to quit
	            if (word.equalsIgnoreCase("quit")) {
	                break;
	            }

	            // look up the meaning of the word in the dictionary
	            String meaning = dictionary.get(word);

	            // if the word is not in the dictionary, prompt the user to enter a new meaning
	            if (meaning == null) {
	                System.out.print("Word not found. Enter a meaning: ");
	                meaning = scanner.nextLine();
	                dictionary.put(word, meaning);
	            }

	            // display the meaning of the word
	            System.out.println("Meaning: " + meaning);
	        }

	        // close the scanner
	        scanner.close();
	    }
	}


