package com.my.ldh_travel_test.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.my.ldh_travel_test.service.ShoptImgService;
import com.my.ldh_travel_test.service.ShoptService;
import com.my.ldh_travel_test.vo.Shopt;
import com.my.ldh_travel_test.vo.ShoptImg;

@RestController
@RequestMapping(value="shopt")
public class ShoptController {
	
	@Autowired
	ShoptService shoptService;
	
	@Autowired
	ShoptImgService shoptImgService;
	
	
	@PostMapping("test")
	public String test(
				@RequestParam(value="imgs[]") List<String> imgs
			) {
		
		
		//size: 받은 이미지 파일명의 개수
		for(int i = 0; i<imgs.size(); i++) {
			//get(i)해당 인덱스의 값을 가져옴.
			String img = imgs.get(i);
			System.out.println(img);
		}
		
		
		return "ok";
	}
	
	@PostMapping("save")
	public String save(
				@RequestParam(value="type") String shop_type,
				@RequestParam(value="name") String shop_name,
				@RequestParam(value="ceo") String shop_ceo,
				@RequestParam(value="bs_code") String shop_bs_code,
				@RequestParam(value="zonecode") String shop_zonecode,
				@RequestParam(value="addr1") String shop_addr1,
				@RequestParam(value="addr2") String shop_addr2,
				@RequestParam(value="tel") String shop_tel,
				@RequestParam(value="content") String shop_content,
				@RequestParam(value="img_url") String img_url,
				@RequestParam(value="detail_imgs[]") List<String> detail_imgs
			) {
		
		
		//유저 idx 넣기
		
		String uuid = UUID.randomUUID().toString();
		
		Shopt shopt = new Shopt();
		
		shopt.setShop_uuid(uuid);
		shopt.setShop_type(shop_type);
		shopt.setShop_name(shop_name);
		shopt.setShop_ceo(shop_ceo);
		shopt.setShop_bs_code(shop_bs_code);
		shopt.setShop_zonecode(shop_zonecode);
		shopt.setShop_addr1(shop_addr1);
		shopt.setShop_addr2(shop_addr2);
		shopt.setShop_tel(shop_tel);
		shopt.setShop_content(shop_content);
		shopt.setShop_main_img_url(img_url);
		
		shoptService.save(shopt);
		
		int newShopIdx = shopt.getShop_idx();
		
		for(int i = 0; i<detail_imgs.size(); i++) {
			String url = detail_imgs.get(i);
			
			ShoptImg si = new ShoptImg();
			si.setShop_idx(newShopIdx);
			si.setImg_url(url);
			
			shoptImgService.save(si);
			
			System.out.println(url);
		}
		
		return "ok";
		
	}
}
