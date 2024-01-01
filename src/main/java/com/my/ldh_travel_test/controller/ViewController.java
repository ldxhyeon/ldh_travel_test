package com.my.ldh_travel_test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 하나의 프로젝트만 가져오기
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
