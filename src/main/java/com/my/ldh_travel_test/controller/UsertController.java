package com.my.ldh_travel_test.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.my.ldh_travel_test.service.UsertService;
import com.my.ldh_travel_test.vo.Usert;

@RestController
@RequestMapping(value="u")
public class UsertController {
	
	
	// 이동현 수정완료
	// 2차 수정 완료
	
	@Autowired
	UsertService usertService;
	
	
	
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
	
	
		Usert usert = usertService.findByNickname(nickname);
		
			
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
