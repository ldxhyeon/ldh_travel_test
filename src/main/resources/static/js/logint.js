$(document).ready(function(){
	
	
	$('#login-btn').on('click',function(){
		var id = $('#id').val();
		var pw = $('#pw').val();
		
		$.ajax({
			url:'./u/login',
			type:'get',
			data:{
				id:id,
				pw:pw
			},
			success:function(json){
				if(json == '') {
					alert('가입된 회원이 없습니다.')
				}else {
					alert(json.nickname+'님 안녕하세요!')
					location.replace('./')
				}
			},
			error:function(err){}
		});
		
		
		//세션 로그인 한 유저 정보 넣고, 메인페이지로 이동
	});
	
	
	$('#go-register-btn').on('click',function(){
		location.href = './registert';
	});
	
	
});