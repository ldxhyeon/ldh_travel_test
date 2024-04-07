$(document).ready(function(){
	
	
	var activeArray = [];
	let checkId=false;
	let checkNickname=false;
	let checkPw=false;
	
	
	//액티비티 선택
	$('.tag-checkbox').on('click',function(){
		
		// $(this).hasClass 클래스 유무체크
		var isActive = $(this).hasClass('active');
		
		//$(this).data html data-value 데이터 값 적용
		var value = $(this).data('value');
		
		//active 클래스가 없으므로 isActive false
		if(isActive){
			
			//indexOf를 사용해서 activeArray 배열에서 value 값의 인덱스를 찾기.
			var index = activeArray.indexOf(value);
			//splice 배열 인덱스에서 1개의 요소 삭제
			activeArray.splice(index, 1);
			//액티브 클래스 삭제 (UI)
			$(this).removeClass('active');
			
		}else{
			
			if(activeArray.length < 3) {
				//배열에 값 푸쉬
				activeArray.push(value);
				//액티브 클래스 추가
				$(this).addClass('active');
			}else{
				alert('개수 초과');
			}
		
		}
		
		
		
		console.log(activeArray);
		
		
	});
	
	
	
	// 닉네임 유효성 검사
	$('#nick').on('focusout',function(){
		console.log('닉네임 검사 시작');
		var nick = $('#nick').val();
		
		//ajax
		$.ajax({
			url:'./u/findByNickname',
			type:'get',
			data:{
				'nickname':nick
			},
			success:function(json) {
				
				
				if(json != '') {
					//이미 가입된 아이디 존재
					checkNickname=false;
					$('#nick-result').attr('class','inp-result-txt no')
					$('#nick-result').html('이미 가입된 닉네임이 존재합니다.')
				}else {
					//가입 가능한 아이디	
					checkNickname=true;
					$('#nick-result').attr('class','inp-result-txt ok')
					$('#nick-result').html('가입이 가능한 닉네임 입니다.')
				}
				// 정해진 글자 수를 넘지 않으면 가입 x 
				if(nick.length < 3){
					checkNickname=false;
					$('#nick-result').attr('class','inp-result-txt no')
					$('#nick-result').html('최소 3자리 이상의 닉네임을 사용하세요.')
				}
			},
			error:function(err){
				
			}	
		})
		
	});
	
	
	// 아이디 검증
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
					checkId=false;
					$('#id-result').attr('class','inp-result-txt no')
					$('#id-result').html('이미 가입된 아이디가 존재합니다.')
				}else {
					//가입 가능한 아이디	
					checkId=true;
					$('#id-result').attr('class','inp-result-txt ok')
					$('#id-result').html('가입이 가능한 아이이디 입니다.')
				}
				// 정해진 글자 수를 넘지 않으면 가입 x 
				if(id.length < 4){
					checkId=false;
					$('#id-result').attr('class','inp-result-txt no')
					//문구대로 수정하기!
					$('#id-result').html('아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.')
				}
				
			},
			error:function(err){
				
			}	
		})
		
	});
	
	
	//비밀번호 확인
	$('#pw,#pw-check').on('keyup',function(){
		var pw = $('#pw').val();
		var pwCheck = $('#pw-check').val();
		console.log(`pw : ${pw}, pwCheck : ${pwCheck}`);
		
		//비밀번호 일치
		if(pw == pwCheck) {
			checkPw = true;
			$('#pw-result').attr('class','inp-result-txt ok');
			$('#pw-result').html('비밀번호가 일치 합니다.');
		//비밀번호 불일치
		}else{
			checkPw = false;
			$('#pw-result').attr('class','inp-result-txt no');
			$('#pw-result').html('비밀번호가 일치하지 않습니다.');
		}		
		
		//비밀번호가 형식에 안맞을때
		if(checkPwRule(pw)==false) {
			checkPw = false;
			$('#pw-result').attr('class','inp-result-txt no');
			$('#pw-result').html('영문,숫자,특수문자를 혼합하여 8자 이상 입력해주세요..');
		}
		
		
	});
	
	
	
	
	$('#submit-btn').on('click',function(){
		var id = $('#id').val();
		var pw = $('#pw').val();
		var pwCheck = $('#pw-check').val();
		var nick = $('#nick').val();
		var addr1 = $('#addr1').val();
		var addr2 = $('#addr2').val();
		
		
		if(!checkId){
			alert('아이디가 확인되지 않았습니다.')
			return;
		}
		
		if(!checkPw){
			alert('비밀번호가 확인되지 않았습니다.')
			return;
		}
		
		if(!checkNickname){
			alert('닉네임이 인증되지 않았습니다.')
			return;
		}
		
		if(addr1.length == 0) {
			alert('기본주소는 필수 입니다.')
			return;
		}
		
		//액티비티 만들기
		
		var act='';
		
		// 배열의 값을 누적시키고 배열이 끝나면 탈출.
		$.each(activeArray,function(index, item){
			act += '#'+item;
		});
		
		// 누적시킨 값 한번에 출력
		console.log(act);
		
		
		$.ajax({
			url:'./u/save',
			type:'post',
			data:{
				'id':id,
				'pw':pw,
				'nickname':nick,
				'addr1':addr1,
				'addr2':addr2,
				'act':act
			},
			success:function(json) {
				if(json=='ok'){
					alert(`${nick} 님 즐거운 여행하세요!`)
					location.replace('./logint')
				}
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


function checkPwRule(pw){
	var reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
		
	if(false === reg.test(pw)) {
		return false;
	}else{
		return true;
	}
 
}