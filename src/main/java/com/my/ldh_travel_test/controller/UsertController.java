package com.my.ldh_travel_test.controller;

import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.my.ldh_travel_test.service.UsertService;
import com.my.ldh_travel_test.vo.Usert;


//프론트와 통신하기 위해 restcontroller를 사용함.
@RestController
@RequestMapping(value="u")
public class UsertController {
	
	
	@Autowired
	UsertService usertService;
	
	
	@GetMapping("logout")
		public String logout(HttpSession session) {
		
		session.invalidate();
		
		return "ok";
	}
	
	@GetMapping("login")
		public Usert login(
					@RequestParam(value="id") String id,
					@RequestParam(value="pw") String pw,
					//HttpSession 객체를 참조하기 위한 변수를 선언
					HttpSession session
				) {
		
		
		Usert usert = new Usert();
		usert.setId(id);
		usert.setPw(pw);
		
		Usert result = usertService.findByIdAndPw(usert);
		
		if(result == null) {
			
		}else {
			//"me"라는 속성 이름을 사용하면 result에 정보를 가져옴 
			// 로그인 유지 기능도 가능.
			session.setAttribute("me",result);
		}
		
		return result;
		
	}
		
	
	
	@GetMapping("findById")
		public Usert findById(
					@RequestParam(value="id") String id
				) {
		
		
		Usert usert = usertService.findById(id);
		
			
		return usert;
	}
	
	@GetMapping("findByNickname")
	public Usert findByNickname(
					@RequestParam(value="nickname") String nickname
				) {
	
		// 해당 닉네임에 맞는 사용자를 찾아 usert에 할당
		Usert usert = usertService.findByNickname(nickname);
		
		// 사용자 정보 반환
		return usert;
}
	
	
	@PostMapping("save") 
		public String save (
					@RequestParam(value="id") String id,
					@RequestParam(value="pw") String pw,
					@RequestParam(value="nickname") String nickname,
					@RequestParam(value="addr1") String addr1,
					@RequestParam(value="addr2") String addr2,
					@RequestParam(value="act") String activity
				) {
		
		String uuid = UUID.randomUUID().toString();
		
		Usert usert = new Usert();
		
		usert.setUser_uuid(uuid);
		usert.setId(id);
		usert.setPw(pw);
		usert.setNickname(nickname);
		usert.setAddr1(addr1);
		usert.setAddr2(addr2);
		usert.setActivity(activity);
		
		usertService.save(usert);
		
		return "ok";
	
	}

}
