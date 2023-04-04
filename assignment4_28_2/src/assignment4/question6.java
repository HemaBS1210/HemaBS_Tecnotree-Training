package assignment4;
import java.util.Arrays;
public class question6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		    // Create an array of strings
		    String[] stringArray = {"apple", "banana", "cherry", "date", "elderberry"};

		    // Sort the array
		    Arrays.sort(stringArray);

		    // Search for the index of "cherry" using binarySearch()
		    int index = Arrays.binarySearch(stringArray, "cherry");

		    // Print the result
		    if (index >= 0) {
		      System.out.println("The index of 'cherry' in the array is: " + index);
		    } else {
		      System.out.println("The array does not contain 'cherry'");
		    }
		  }

}
