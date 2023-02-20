package com.example.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/user")
public class JobseekerController {
	
	@RequestMapping("/index")
	public String userdashboard() {
		
		
		return "user/index";
	}
}
