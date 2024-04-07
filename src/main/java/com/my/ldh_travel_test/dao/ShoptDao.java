package com.my.ldh_travel_test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_test.vo.Shopt;

@Repository
public class ShoptDao {
	@Autowired
	SqlSession s;
	
	public int save(Shopt shopt) {
		return s.insert("shopt.save",shopt);
	}

}
