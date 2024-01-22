package com.my.ldh_travel_test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.ldh_travel_test.dao.UsertDao;
import com.my.ldh_travel_test.vo.Usert;

@Service
public class UsertService {
	@Autowired
	UsertDao usertDao;
	
	
	public Usert findByNickname(String nickname) {
		return usertDao.findByNickname(nickname);
	}
	
	public Usert findById(String id) {
		return usertDao.findById(id);
	}
	
	public int save(Usert usert) {
		return usertDao.save(usert);
	}
}
