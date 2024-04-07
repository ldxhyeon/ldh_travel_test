package com.my.ldh_travel_test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.ldh_travel_test.dao.ShoptDao;
import com.my.ldh_travel_test.vo.Shopt;

@Service
public class ShoptService {
	@Autowired
	ShoptDao shoptDao;
	
	public int save(Shopt shopt) {
		return shoptDao.save(shopt);
	}
	
}
