package assignment6;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashSet;
import java.util.Scanner;

public class question5 {
	    public static void main(String[] args) {
	        HashSet<String> wordsSet = new HashSet<String>();
	        Scanner scanner = new Scanner(System.in);

	        System.out.println("Enter the path to the file:");
	        String path = scanner.nextLine();

	        try {
	            File file = new File(path);
	            Scanner fileScanner = new Scanner(file);

	            while (fileScanner.hasNext()) {
	                String word = fileScanner.next();
	                wordsSet.add(word);
	            }

	            fileScanner.close();

	            System.out.println("Number of unique words in the file: " + wordsSet.size());
	        } catch (FileNotFoundException e) {
	            System.out.println("File not found.");
	        }

	        scanner.close();
	    }
	}

	

	
//	    public static void main(String[] args) {
//	        Set<String> words = new HashSet<String>();
//	        try {
//	            BufferedReader reader = new BufferedReader(new FileReader("filename.txt"));
//	            String line = null;
//	            while ((line = reader.readLine()) != null) {
//	                String[] tokens = line.split("\\s+");
//	                for (String token : tokens) {
//	                    words.add(token);
//	                }
//	            }
//	            reader.close();
//	        } catch (IOException e) {
//	            System.err.println("Error reading file: " + e);
//	            System.exit(1);
//	        }
//	        System.out.println("Number of unique words: " + words.size());
//	    }
//	}