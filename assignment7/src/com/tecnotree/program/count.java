package com.tecnotree.program;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.io.*;

public class count {
	public static void main(String[] args) {
			// TODO Auto-generated method stub

	        int wordCount = 0;

	        try (BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\sharman\\OneDrive - Tecnotree\\Documents\\input.txt"))) {
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

	
