package com.example.reverse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class reverse {

@GetMapping("/reverse")

public String reverseString(@RequestParam("input") String input) {

StringBuilder reversed = new StringBuilder(input).reverse();

return reversed.toString();

}

}