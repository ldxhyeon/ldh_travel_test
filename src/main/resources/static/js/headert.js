$(document).ready(function(){
	
	
	$('.menu-btn').on('click',function(){
		var page = $(this).data('page');
		location.href = page;
	});
	
	$('#go-login-btn').on('click',function(){
		location.href = './logint';
	});
	
	$('#go-logout-btn').on('click',function(){
		
		var out = confirm("로그아웃을 하시겠습니까?");
		
		if(out == false) {
			return;
		}
		
		$.ajax({
			url:'./u/logout',
			type:'get',
			data:{},
			success:function(json) {
				if(json == 'ok') {
					alert('로그아웃 되었습니다.');
					location.replace('./');
				}
			},
			error:function(err) {
				
			},
		})
	});
	
	
});