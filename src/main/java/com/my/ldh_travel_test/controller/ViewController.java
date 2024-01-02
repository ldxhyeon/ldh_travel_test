package com.my.ldh_travel_test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ViewController {
	
	@GetMapping("/")
	public String homet() {
	
		return "homet";
	}
	
	@GetMapping("login")
	public String login() {
	
		return "logint";
	}
}
