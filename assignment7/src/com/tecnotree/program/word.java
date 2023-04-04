package com.tecnotree.program;
//import java.util.*;
import java.io.*;

public class word{

	public static void main(String[] args) {
		// TODO Auto-generated method stub

      int wordCount = 0;

      try (BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\shekahe\\eclipse-workspace\\assignment7\file.txt"))) {
          String line;
          while ((line = br.readLine()) != null) {
              String[] lineWords = line.split(" ");
              wordCount += lineWords.length;
          }
      } catch (IOException e) {
          e.printStackTrace();
      }

      System.out.println("Number of words in the file: " + wordCount);

	}

}
