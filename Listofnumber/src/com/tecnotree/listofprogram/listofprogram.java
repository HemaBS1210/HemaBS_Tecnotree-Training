/**
 * 
 */
package com.tecnotree.listofprogram;

/**
 * @author shekahe
 *
 */
class ListofNumbers{
	  public int[] arr = new int[10];
	  public void writeList()
	{
	  try 
	    {
	       arr[10]= 11;
	}
	catch(NumberFormatException e1){
	System.out.println("NumberFormatExeption=>" + e1.getMessage());
	}
	catch(IndexOutofBoundsExeption e2)
	{
	   System.out.println("IndexOutofBoundsExeption=>" + e2.getMessage());
	   }
	 }
	

//public class listofprogram {
//
//	/**
//	 * @param args
//	 */
	public static void main(String[] args) {
		//Creating an array of integer with name ‘arr[10]’

		
		class Main  {
		 public static void main(String[] args){
		   ListofNumbers list = new ListofNumbers();
		 list.writeList();
		 }
		}
		



		// TODO Auto-generated method stub

	
	}
}


