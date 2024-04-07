package com.my.ldh_travel_test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_test.vo.ShoptImg;

@Repository
public class ShoptImgDao {
	
	@Autowired
	SqlSession s;
	
	public int save(ShoptImg si) {
		return s.insert("shopt_img.save",si);
	}
}
