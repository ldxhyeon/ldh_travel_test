<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>트립쉐어 로그인 테스트</title>
<link rel="icon" href="./image/trip-logo-icon.png">

<%@ include file="/WEB-INF/views/include/libt.jsp" %>


<link rel="stylesheet" href="./css/all.min.css" />
<link rel="stylesheet" href="./css/web.css" />

<script src = "./js/logint.js"></script>

</head>
<body>


	<main class="body">
	
		<div style="display:flex;">
		
			<section style="width:35%;height:100vh;">
				<img style="width:100%;height:100%;object-fit:cover;"src="https://i.pinimg.com/originals/f4/ff/c7/f4ffc7827687908d4d28fd3fc8513d57.jpg">
			</section>
			
			<section class="form-body" style="width:65%;height:100vh;background:#fff;">
				<div class="form-box">
					<div style="font-size:22px; font-weight: 700;margin-bottom: 20px;">로그인</div>
					<label>아이디</label>
					<input>
					<label>비밀번호</label>
					<input type="password" />
					
					<button>로그인</button>
					<button id="go-register-btn" class="gray-btn">회원가입</button>
				</div>
			</section>
			
		</div>
	</main>
	
	
</body>
</html>