package com.my.ldh_travel_test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_test.vo.Usert;


@Repository
public class UsertDao {
	@Autowired
	SqlSession s;
	
	
	
	
	public Usert findByNickname(String nickname) {
		return s.selectOne("usert.findByNickname",nickname);
	}
	
	public Usert findById(String id) {
		return s.selectOne("usert.findById",id);
	}
	
	public int save(Usert usert) {
		return s.insert("usert.save",usert);
	}
}
