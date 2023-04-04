package assign2;

public class address {

	    private String street;
	    private String city;
	    private String state;
	    private String zipCode;
	    private String country;

	    // Constructor
	    public address(String street, String city, String state, String zipCode, String country) {
	        this.street = street;
	        this.city = city;
	        this.state = state;
	        this.zipCode = zipCode;
	        this.country = country;
	    }

	    // Getter and Setter methods for street
	    public String getStreet() {
	        return street;
	    }

	    public void setStreet(String street) {
	        this.street = street;
	    }

	    // Getter and Setter methods for city
	    public String getCity() {
	        return city;
	    }

	    public void setCity(String city) {
	        this.city = city;
	    }

	    // Getter and Setter methods for state
	    public String getState() {
	        return state;
	    }

	    public void setState(String state) {
	        this.state = state;
	    }

	    // Getter and Setter methods for zipCode
	    public String getZipCode() {
	        return zipCode;
	    }

	    public void setZipCode(String zipCode) {
	        this.zipCode = zipCode;
	    }

	    // Getter and Setter methods for country
	    public String getCountry() {
	        return country;
	    }

	    public void setCountry(String country) {
	        this.country = country;
	    }
	

	
	public static void main(String[] args) {
		// Create a new Address object
		address address = new address("123 Main St", "Anytown", "CA", "12345", "USA");

		// Get the street and print it
		String street = address.getStreet();
		System.out.println("Street: " + street);

		// Set the city to "Othertown"
		address.setCity("Othertown");

		// Get the city and print it
		String city = address.getCity();
		System.out.println("City: " + city);

		// Set the zip code to "67890"
		address.setZipCode("67890");

		// Get the zip code and print it
		String zipCode = address.getZipCode();
		System.out.println("Zip Code: " + zipCode);

		
		
		
	}

}
