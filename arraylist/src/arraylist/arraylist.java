package arraylist;
//import java.util.ArrayList;
//public class arraylist {
//
//    public static void main(String[] args) {
//        ArrayList<String> myArrayList = new ArrayList<String>();
//
//        // Adding elements to the ArrayList
//        myArrayList.add("apple");
//        myArrayList.add("banana");
//        myArrayList.add("cherry");
//        System.out.println("ArrayList after adding elements: " + myArrayList);
//
//        // Changing an element in the ArrayList
//        myArrayList.set(1, "orange");
//        System.out.println("ArrayList after changing element: " + myArrayList);
//
//        // Removing an element from the ArrayList
//        myArrayList.remove(2);
//        System.out.println("ArrayList after removing element: " + myArrayList);
//    }
//}
//import java.util.ArrayList;
//public class arraylist {
//
//
//    public static void main(String[] args) {
//        ArrayList<Integer> numbers = new ArrayList<Integer>();
//
//        // Adding elements to the ArrayList
//        numbers.add(10);
//        numbers.add(20);
//        numbers.add(30);
//        System.out.println("ArrayList after adding elements: " + numbers);
//
//        // Changing an element in the ArrayList
//        numbers.set(1, 25);
//        System.out.println("ArrayList after changing element: " + numbers);
//
//        // Removing an element from the ArrayList
//        numbers.remove(2);
//        System.out.println("ArrayList after removing element: " + numbers);
//    }
//}

//Here is an example of reading a text file using FileReader and BufferedReader:
import java.io.*;

public class arraylist {
  public static void main(String[] args) {
      try {
          // Open the file for reading
          File file = new File("input.txt");
          FileReader fileReader = new FileReader(file);
          BufferedReader bufferedReader = new BufferedReader(fileReader);

          // Read the contents of the file line by line
          String line;
          while ((line = bufferedReader.readLine()) != null) {
              System.out.println(line);
          }

          // Close the file
          bufferedReader.close();
      } catch (IOException e) {
          e.printStackTrace();
      }
  }
}