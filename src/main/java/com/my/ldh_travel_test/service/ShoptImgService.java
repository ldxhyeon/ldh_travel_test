package com.my.ldh_travel_test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.ldh_travel_test.dao.ShoptImgDao;
import com.my.ldh_travel_test.vo.ShoptImg;

@Service
public class ShoptImgService {

	@Autowired
	ShoptImgDao shoptImgDao;
	
	public int save(ShoptImg si) {
		return shoptImgDao.save(si);
	}
}
