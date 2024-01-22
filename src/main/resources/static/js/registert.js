$(document).ready(function(){
	
	
	
	
	
	$('#id').on('focusout',function(){
		console.log('아이디 검사 시작');
		var id = $('#id').val();
		
		//ajax
		$.ajax({
			url:'./u/findById',
			type:'get',
			data:{
				'id':id
			},
			success:function(json) {
				if(json != '') {
					//이미 가입된 아이디 존재
					$('#id-result').attr('class','inp-result-txt no')
				}else {
					//가입 가능한 아이디	
					$('#id-result').attr('class','inp-result-txt o')
				}
			},
			error:function(err){
				
			}	
		})
		
	});
	
	
	
	$('#submit-btn').on('click',function(){
		var id = $('#id').val();
		var pw = $('#pw').val();
		var pwCheck = $('#pw-check').val();
		var nick = $('#nick').val();
		var addr1 = $('#addr1').val();
		var addr2 = $('#addr2').val();
		
		
		
		$.ajax({
			url:'./u/save',
			type:'post',
			data:{
				'id':id,
				'pw':pw,
				'nickname':nick,
				'id':nick,
				'addr1':addr1,
				'addr2':addr2,
				'act':'#캠핑#레저#등산'
			},
			success:function(json) {
				alert(json);
			},
			error:function(err) {
				
			} 
		});
		
	});
	
	
	//주소 api 호출
	$('#addr1').click(function(){
		
		var width = 500; //팝업의 너비
		var height = 600; //팝업의 높이
		
		
		new daum.Postcode({
        	oncomplete: function(data) {
	            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
	            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        		$('#addr1').val(data.address);
        	}
  	 	}).open({
			   	left: (window.screen.width / 2) - (width / 2),
				top: (window.screen.height / 2) - (height / 2)
		   });
	
	});
});