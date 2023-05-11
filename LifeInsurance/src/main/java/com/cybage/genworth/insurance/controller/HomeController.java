package com.cybage.genworth.insurance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String home(Model model)
	{
		model.addAttribute("title","Home - Life Insurnce");
		System.out.println("check  . .");
		return "home";
	}
	
	@RequestMapping("/about")
	public String about(Model model)
	{
		model.addAttribute("title","Home - Life Insurnce");
		return "about";
	}
	
	
	@RequestMapping("/signup")
	public String signup(Model model)
	{
		model.addAttribute("title","Home - Life Insurnce");
		return "signup";
	}

}
