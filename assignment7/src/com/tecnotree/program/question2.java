package com.tecnotree.program;


import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
public class question2 {

		public static void main(String[] args) {
			// TODO Auto-generated method stub

			        String file1 = "C:\\Users\\shekahe\\OneDrive - Tecnotree\\Desktop\\file.txt";
			        String file2 = "C:\\Users\\shekahe\\OneDrive - Tecnotree\\Desktop\\input.txt";
			        boolean identical = true;

			        try (BufferedReader reader1 = new BufferedReader(new FileReader(file1));
			             BufferedReader reader2 = new BufferedReader(new FileReader(file2))) {
			            String line1 = reader1.readLine();
			            String line2 = reader2.readLine();

			            while (line1 != null && line2 != null) {
			                if (!line1.equals(line2)) {
			                    identical = false;
			                    break;
			                }
			                line1 = reader1.readLine();
			                line2 = reader2.readLine();
			            }

			            if (identical && line1 == null && line2 == null) {
			                System.out.println("The files are identical.");
			            } else {
			                System.out.println("The files are not identical.");
			            }
			        } catch (IOException e) {
			            System.out.println("Error reading files: " + e.getMessage());
			        }
			    }
			}

}
