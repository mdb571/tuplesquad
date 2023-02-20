/**
 * 
 */
package com.example.project.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.project.dao.JobSeekerRepo;
//import com.example.project.dao.JobSeekerRepo;
import com.example.project.entity.JobSeeker;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpSession;

import com.example.project.helper.*;

@Controller
public class MainController {

	@Autowired
	private JobSeekerRepo jobseekerrepo;

	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@RequestMapping("/")
	public String home(Model model) {
		model.addAttribute("title", "Home - GOcarrer");
		return "home";
	}

	@RequestMapping("/about")
	public String about(Model model) {
		model.addAttribute("title", "About - Gocarrer");
		return "about";
	}

	@RequestMapping("/signup/")
	public String signup(Model model) {
		model.addAttribute("title", "Register - GOcarrer");
		model.addAttribute("user", new JobSeeker());
		return "signup";
	}

	@GetMapping("/signin")
	public String customLogin(Model model) {
		model.addAttribute("title", "Login Page");
		return "login";
	}

	@RequestMapping(value = "/do_register", method = RequestMethod.POST)
	public String registerUser(@ModelAttribute("JobSeeker") JobSeeker user, HttpSession session, Model model) {
		// try {

		user.setRole("ROLE_USER");
		user.setEnabled(true);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		System.out.println(user);
		// this.jobseekerrepo.save(user);
		JobSeeker result = this.jobseekerrepo.save(user);
		model.addAttribute("user", result);
		session.setAttribute("message", new Message("Successfully Registered !!", "alert-success"));
		return "signup";
//		}
//		catch(Exception e) {
//			
//			e.printStackTrace();
//			model.addAttribute("user", user);
//			session.setAttribute("message", new Message("Something Went wrong !! " + e.getMessage(), "alert-danger"));
//			return "signup";
//		}

	}

}