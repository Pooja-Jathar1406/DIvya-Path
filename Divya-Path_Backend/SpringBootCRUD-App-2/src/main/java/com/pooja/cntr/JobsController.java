package com.pooja.cntr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pooja.model.Jobs;
import com.pooja.service.JobsService;

@RestController
@CrossOrigin
@RequestMapping("/")
public class JobsController {

	@Autowired
	private JobsService jobsService;
	
	
	@PostMapping(value = {"add-jobs-admin"})
	public String jobAdd(@RequestBody Jobs job) {
		jobsService.add(job);
		return "successs";
	}
}
