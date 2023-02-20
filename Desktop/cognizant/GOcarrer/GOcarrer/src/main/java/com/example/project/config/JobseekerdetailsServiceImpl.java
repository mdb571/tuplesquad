package com.example.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.project.dao.JobSeekerRepo;
import com.example.project.entity.JobSeeker;


public class JobseekerdetailsServiceImpl implements UserDetailsService{
		
	
	
	@Autowired
	private JobSeekerRepo userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

	
		JobSeeker user = userRepository.getUserByUserName(username);

		if (user == null) {
			throw new UsernameNotFoundException("Could not found user !!");
		}
		
		 Jobseekerdetails jobseekerdetails=new Jobseekerdetails(user);
		

		return jobseekerdetails;
	}
}
