//파이어베이스 스토리지 코드
const firebaseConfig = {
  apiKey: "AIzaSyBtHu1BaKNKo4Ytr7rDIYSjdimFZg13z7o",
  authDomain: "ldh-travel-test.firebaseapp.com",
  projectId: "ldh-travel-test",
  storageBucket: "ldh-travel-test.appspot.com",
  messagingSenderId: "844574530000",
  appId: "1:844574530000:web:b52606539b17fdf67a41d5",
  measurementId: "G-T4B5CVWJW9"
};


//여기까지 함
function getBase64(file) {
   return new Promise(function(resolve, reject){
	   //FileReader는 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 읽을 파일을 가리키는 File 혹은 Blob 객체를 이용해 
	   // 파일의 내용을(혹은 raw data버퍼로) 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해줍니다.
	   var reader = new FileReader();
	   // readAsDataURL : 파일 객체를 읽은 후 데이터 URL표현으로 변환한다.
	   reader.readAsDataURL(file);
	   
	   reader.onload = function () {
		   // result : 파일 읽기가 완료되었을때 내용 반환
		   // 위 프로미스 resolve로 값 전달
		   resolve(reader.result);
	   };
	   reader.onerror = function (error) {
		   reject('Error: ', error);
	   };
   });
}



$(document).ready(function(){
	
	
	$.ajax({
		url:'./shopt/test',
		type:'post',
		data:{
			imgs:['a','b']
		},
		success:function(response){
			alert(response);
		},
		error:function(error) {
			console.log(error);
		}
	})
	
	let selectedType='';
	
	//파이어베이스 연동
	//파이어베이스 초기화 되지 않았을 때
	if (!firebase.apps.length) {
		// 파이어베이스 초기화 하고 매개변수로 스토리지 코드 받음.
		firebase.initializeApp(firebaseConfig);
	}
	//  Firebase Storage에 액세스할 수 있는 Storage 객체를 반환함.
	var storage = firebase.storage();
	

	//	var base64ImageList = []; // 사용 안하는 이유 : UI, data 2개를 관리 할 필요 없음
	
	var imgCount=0;
	
	//사진 여러장 등록
	$('#add-img-btn').on('click',function(){
		
		var imgCount = $('.added-img').length;
		
		if(imgCount > 7) {
			alert('상세이미지는 최대 8장입니다.');
			return;
		}
		
		//input 태그 강제 클릭
		$('#adding-img-input').trigger('click');
	});
	
	
	
	
	// 사진 여러장 input change 이벤트
	$('#adding-img-input').on('change', async function(){
		//해당 파일의 속성을 가지고 옴
		var imgFile = $(this)[0].files[0];
		//file -> base64 변환
		var base64 = await getBase64(imgFile);
		
//		base64ImageList.push(base64);
//		console.log(base64ImageList);
		
		$('#detail-imgs').append(`
			<div class="col-md-6 added-img" style="padding:10px;">
				<div class="f-img-add-btn"> 
					<img class="detail-base64-img" src="${base64}"/> 
					<img class="delete-btn" src="./image/delete.png"/> 
				</div> 
			</div>
		`);
		
		// input file 초기화
		// 이 코드는 이미지를 추가한 후에도 다음 번 이미지를
		// 선택할 때 이전에 선택한 이미지를 기억하지 않도록 하기 위함
		$(this).val('');
	});
	
	//사진 삭제
	// document 한 이유 : delete는 동적요소이므로 문서 전체에서 이벤트를 확인하는것.
	$(document).on('click','.delete-btn',function(){
		
		var con = confirm('사진 등록을 취소 하시겠습니까?');
		if(!con) {
			return;
		}
		
		
		// 해당 delete 아이콘에 해당하는 col부모를 삭제함.
		$(this).closest('.col-md-6').remove();
	});
	
	
	//파이어베이스 테스트
	
	var file;
	
	// change:입력 요소의 내용이 변경되었을 때 실행
	$('#img-file').on('change',async function(){
		
		// 파일 첫번째의 속성을 가져온다.
		file = $(this)[0].files[0];
		
		//이미지 미리보기 로직 아래 await 로직이랑 결과가 같은 로직
//		getBase64(file).then((b64)=>{
//			console.log(b64);
//			$('#preview-img').attr('src',b64);
//		});


		// base64로 변환 로직
		var b64 = await getBase64(file);
		// //이미지 미리보기 로직 src 속성 b64로 변경
		$('#preview-img').attr('src',b64);
		
	});
	
	
	$('#preview-img').on('click',function(){
		//trigger : 강제클릭
		$('#img-file').trigger('click');
	});
	
	
	$('#test-upload-img-btn').on('click',async function(){
		
		// 파이어베이스 초기화와 , 이미지 속성을 넘김
		var url = await uploadImgAndGetUrl(storage, file);
		
		alert(url);
	});
	
	
	
	
	
	
	
	//다음 주소창 API 사용
	var width = 500; //팝업의 너비
	var height = 600; //팝업의 높이
	
	$('#address1').on('click',function(){
		new daum.Postcode({
        	oncomplete: function(data) {
	            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
	            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
	            
        		$('#address1').val(data.address);
        		$('#zonecode').val(data.zonecode)
        	},
        	width: width,
        	height: height, 
  	 	}).open({
			   	left: (window.screen.width / 2) - (width / 2),
				top: (window.screen.height / 2) - (height / 2)
		   });
	});
	
	
	//업체종류 선택 로직 만들기
	$('.f-type-tag').on('click',function(){
		
		// 클릭시 클래스 삭제
		$(".f-type-tag").removeClass("selected");
		// this 클릭시 selected 클래스 css 적용
		$(this).addClass("selected");
		// jsp data-value 값 가져와서 변수에 할당
		var value = $(this).data('value');
		//데이터 값 변수에 할당
		// 밑으로 바로 내려가서 할당이 되지 않으므로 맨 위에 선언하여 ajax type에 선언
		selectedType=value;
	});
	
	
	$('#content').on('keyup',function(){
		var text = $(this).val();
		
		var color = 'red';
		if(text.length < 20) {
			color = '#E42300';
		}else {
			color = '#006DFF';
		}
		
		$('#content-len').html(`${text.length} / 300`);
		$('#content-len').css('color',color);
		
	});
	
	
	//업체등록 버튼 이벤트
	$('#submit-btn').on('click',async function(){
		
		//이미지 업로드 하면 base64로 변환한 url을 콘솔출력 
		var imgTags = $('.detail-base64-img');
		$.each(imgTags,function(index,item){
			var base64 = $(item).attr('src');
			console.log(base64);
			
			//base64 파이어 베이스 storage 업로드 한 다음 -> url 받기
		});
		
		var name = $('#name').val();
		var ceo = $('#ceo').val();
		var bs_code = $('#bs-code').val();
		var zonecode = $('#zonecode').val();
		var address1 = $('#address1').val();
		var address2 = $('#address2').val();
		var tel = $('#tel').val();
		var content = $('#content').val();
		
		if(name.length == 0) {
			alert('업체명을 입력해주세요');
			return;
		}
		
		if(ceo.length == 0 || ceo.length > 7) {
			alert('올바른 대표자명을 입력해주세요');
			return;
		}
		
		if(bs_code.length == 0) {
			alert('사업자번호를 입력해주세요');
			return;
		}
		
		if(address1.length == 0) {
			alert('주소를 입력해주세요');
			return;
		}
		
		if(tel.length == 0) {
			alert('전화번호를 입력해주세요');
			return;
		}
		
		if(content.length < 20) {
			alert('내용을 입력해주세요(20자 이상)');
			return;
		}
		
		
		if(file==undefined) {
			alert('대표이미지는 필수 입니다.');
			return;
		}
		
		
		var url = await uploadImgAndGetUrl(storage, file);
		
		//상세이미지 UI 여러장 -> 배열로 추출
		var detailImgsBase64=[];
		var detailImgsUrl=[];
		
		
		var imgTags = $('.detail-base64-img');
		$.each(imgTags,function(index,item){
			var base64 = $(item).attr('src');
			detailImgsBase64.push(base64);
		});
		
		for(var i = 0; i < detailImgsBase64.length; i++) {
			var oneBase64 = detailImgsBase64[i];
			var oneUrl = await uploadBase64AndGetUrl(storage, oneBase64);
			detailImgsUrl.push(oneUrl);
		}
		
		console.log(detailImgsUrl);
		
		$.ajax({
			url:'./shopt/save',
			type:'post',
			data:{
				'type':selectedType,
				'name':name,
				'ceo':ceo,
				'bs_code':bs_code,
				'zonecode':zonecode,
				'addr1':address1,
				'addr2':address2,
				'tel':tel,
				'content':content,
				'img_url':url,
				'detail_imgs':detailImgsUrl
			},
			success:function(json){
				if(json == 'ok') {
					alert('등록이 완료되었습니다.')
					location.replace('./');
				}
			},
			error:function(err){
				
			},
		});
	});
	
});



function uploadBase64AndGetUrl($storage,$b64){
	
	return new Promise((resolve,reject)=>{
		
		// 현재 시간을 밀리초(milliseconds) 단위로 반환
		var now = Date.now();
		// 파이어베이스 경로 지정을 한 후 sh_라는 하위폴더 생성
		var ref = $storage.ref('shopt_image').child('sh_'+now);
		// 파일 업로드시 b64데이터를 URL 형식으로 저장
		ref.putString($b64,'data_url').then(function(snapshot){
			//업로드 완료시 다운로드 하기
			ref.getDownloadURL().then((url)=>{
				resolve(url);
			});
		 // catch : 실패시 콜백함수
		}).catch(function(err){
			//업로드 실패
			reject();
		});
	});
	
	
}; 

function uploadImgAndGetUrl($storage,$file){
	
	return new Promise((resolve,reject)=>{
		
		// 현재 시간을 밀리초(milliseconds) 단위로 반환
		var now = Date.now();
		// 파이어베이스 경로 지정을 한 후 sh_라는 하위폴더 생성
		var ref = $storage.ref('shopt_image').child('sh_'+now);
		// put : 파일 업로드 , .then : 콜백함수
		ref.put($file).then(function(snapshot){
			//업로드 완료시 다운로드 하기
			ref.getDownloadURL().then((url)=>{
				resolve(url);
			});
		 // catch : 실패시 콜백함수
		}).catch(function(err){
			//업로드 실패
			reject();
		});
	});
	
	
}; 





