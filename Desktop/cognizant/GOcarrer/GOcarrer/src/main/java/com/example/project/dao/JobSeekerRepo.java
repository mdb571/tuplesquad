package com.example.project.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.project.entity.JobSeeker;



public interface JobSeekerRepo extends JpaRepository<JobSeeker, Integer> {
	
	@Query("select u from JobSeeker u where u.email = :email")
	public JobSeeker getUserByUserName(@Param("email") String email);
	
	
	
}