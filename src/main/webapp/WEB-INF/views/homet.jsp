<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>트립쉐어 테스트</title>
<link rel="icon" href="./image/trip-logo-icon.png">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<link rel="stylesheet" href="./css/all.min.css" />
<link rel="stylesheet" href="./css/web.css" />


</head>
<body>


	<main class="body">
	
		<%@ include file="/WEB-INF/views/include/headert.jsp" %>
		
		<section class="page-section">
			<div class="page-inner">
				<div class="page-title-text">주말에 여행 어떠세요?</div>
				<img style="width:100%;object-fit:cover;border-radius:10px;margin-top:20px;" src="./image/bg-1.png">
			</div>
		</section>
		
		<section class="page-section">
			<div class="page-inner">
				<div class="page-title-text">호텔/모텔</div>
				<div class="page-sub-title-txt">전국의 숨겨진 숙박시설을 한눈에 확인해보세요.</div>
				
				<div class="box-list-container">
					<img style="width:100%;object-fit:cover;border-radius:10px;margin-top:20px;" src="./image/test1.png">
				</div>
			</div>
		</section>
		
		<section class="page-section">
			<div class="page-inner">
				<div class="page-title-text">음식/문화</div>
				<div class="page-sub-title-txt">전국의 숨겨진 숙박시설을 한눈에 확인해보세요.</div>
				
				<div class="box-list-container">
					<img style="width:100%;object-fit:cover;border-radius:10px;margin-top:20px;" src="./image/test1.png">
				</div>
			</div>
		</section>
		
		
		
	</main>
	
	
</body>
</html>