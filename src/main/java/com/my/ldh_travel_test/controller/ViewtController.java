package com.my.ldh_travel_test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ViewtController {
	
	@GetMapping("/")
	public String homet() {
	
		return "homet";
	}
	
	@GetMapping("logint")
	public String login() {
	
		return "logint";
	}
	
	@GetMapping("registert")
	public String register() {
	
		return "registert";
	}
}
