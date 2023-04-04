package com.tecnotreequestion1;

public class question1 {
	public class Car {
	    private String make;
	    private String model;
	    private int year;
	    private String color;
	    private double price;
	    
	    // Constructor
	    public Car(String make, String model, int year, String color, double price) {
	        this.make = make;
	        this.model = model;
	        this.year = year;
	        this.color = color;
	        this.price = price;
	    }
	    
	    // Getters
	    public String getMake() {
	        return make;
	    }
	    
	    public String getModel() {
	        return model;
	    }
	    
	    public int getYear() {
	        return year;
	    }
	    
	    public String getColor() {
	        return color;
	    }
	    
	    public double getPrice() {
	        return price;
	    }
	    
	    // Setters
	    public void setMake(String make) {
	        this.make = make;
	    }
	    
	    public void setModel(String model) {
	        this.model = model;
	    }
	    
	    public void setYear(int year) {
	        this.year = year;
	    }
	    
	    public void setColor(String color) {
	        this.color = color;
	    }
	    
	    public void setPrice(double price) {
	        this.price = price;
	    }
	}
	// Create a new Car object
	Car myCar = new Car("Toyota", "Camry", 2021, "Black", 25000.00);

	// Get the car's make
	String make = myCar.getMake();
	System.out.println(make); // Output: Toyota

	// Set the car's price
	myCar.setPrice(27000.00);

	// Get the car's new price
	double price = myCar.getPrice();
	System.out.println(price); // Output: 27000.0
}


