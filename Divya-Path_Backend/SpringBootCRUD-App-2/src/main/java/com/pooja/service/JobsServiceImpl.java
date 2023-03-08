package com.pooja.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pooja.dao.JobsDao;
import com.pooja.model.Jobs;

@Service
public class JobsServiceImpl implements JobsService{

	@Autowired
	private JobsDao jobsDao;

	@Override
	public void add(Jobs job) {
		jobsDao.save(job);
		
	}

	@Override
	public void modify(Jobs job) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeById(int jid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Jobs getById(int jid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Jobs> getAll() {
		Iterable<Jobs> itr = jobsDao.findAll();
		List<Jobs> lst = new ArrayList<Jobs>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}
	
}
