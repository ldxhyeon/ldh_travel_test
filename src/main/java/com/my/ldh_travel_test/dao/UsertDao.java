package com.my.ldh_travel_test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_test.vo.Usert;

// 데이터베이스와의 상호작용을 담당하는 어노테이션
// 이것만 사용하게되면 코드복잡하므로 mybatis를 사용함
@Repository
public class UsertDao {
	
	// mybatis 데이터베이스 상호작용
	@Autowired
	SqlSession s;
	
	
	public Usert findByIdAndPw(Usert usert) {
		return s.selectOne("usert.findByIdAndPw",usert);
	}
	
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
