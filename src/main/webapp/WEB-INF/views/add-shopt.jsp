<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>업체등록</title>
<link rel="icon" href="./image/trip-logo-icon.png"/>

<%@ include file="/WEB-INF/views/include/libt.jsp" %>

<link rel="stylesheet" href="./css/all.min.css"/>
<link rel="stylesheet" href="./css/web.css"/>
<link rel="stylesheet" href="./css/form-f.css"/>


<script src="https://www.gstatic.com/firebasejs/7.3.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-storage.js"></script>


<script src="./js/add-shopt.js"></script>

</head>
<body>

	<main style="display:flex; justify-content:center;">
		<div style="width:500px;height:100vh;background:red;">
			<div style="margin:0 auto;width:500px;background:#fff;display: flex;flex-direction: column;">
				<div style="color:#222;font-weight:700;font-size:17px;text-align:center;margin-top:20px;margin-bottom:20px;">업체등록</div>
				
				
				<img id="preview-img" style="cursor:pointer;height:300px;object-fit:cover;" src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"/>
				<input style="display:none" id="img-file" type="file"/>
<!-- 				<button id="test-upload-img-btn">사진 업로드</button> -->
				
				<span class="f-title">업체종류</span>
				<div style="margin-bottom:30px;">
				
					<span data-value="호텔"  class="f-type-tag selected">호텔</span>
					<span data-value="모텔" class="f-type-tag">모텔</span>
					<span data-value="펜션" class="f-type-tag">펜션</span>
					<span data-value="리조트" class="f-type-tag">리조트</span>
					<span data-value="게스트하우스" class="f-type-tag">게스트하우스</span>
					<br/>
					<span data-value="한인민박" class="f-type-tag">한인민박</span>
					<span data-value="셰어하우스" class="f-type-tag">셰어하우스</span>
					<span data-value="글램핑" class="f-type-tag">글램핑</span>
					<span data-value="료칸" class="f-type-tag">료칸</span>
					<span data-value="호스텔" class="f-type-tag">호스텔</span>
				</div>
				
				
				<span class="f-title"> 업체명 </span>
				<input id="name" placeholder="가게명" class="f-inp long" style="margin-bottom:0"/>
				
				<span class="f-title"> 대표자명 </span>
				<input id="ceo" placeholder="대표자명" class="f-inp long" style="margin-bottom:0"/>
				
				<span class="f-title"> 사업자등록번호 (-없이)</span>
				<input id="bs-code" placeholder="사업자등록번호" class="f-inp long" style="margin-bottom:0"/>
				
				<span class="f-title"> 주소 </span>
				<input id="zonecode" style="margin-bottom:2px;"type="text" placeholder="우편번호"class="f-inp long"readonly/>
				<input id="address1" style="margin-bottom:2px"type="text" placeholder="주소"class="f-inp long"readonly/>
				<input id="address2" type="text" placeholder="상세주소(선택)"class="f-inp long"/>
				
				<span class="f-title"> 전화번호 </span>
				<input id="tel" placeholder="전화번호" class="f-inp long" style="margin-bottom:0"/>
				
				<span class="f-title"> 소개 </span>
				<textarea style="margin:4px 0 2px 0;" id="content" class="f-txt"></textarea>
				<span id="content-len">0 / 300</span>
				
				
				<span class="f-title"> 가게사진(최대 8장)</span>
				<input style="display:block;" id="adding-img-input" type="file">
				<div id="detail-imgs" class="row">
					<div class="col-md-6" style="padding:10px;">
						<div id="add-img-btn" class="f-img-add-btn">
							<i class="fa-solid fa-plus"></i>
						</div>
					</div>
					
<!-- 					<div class="col-md-6" style="padding:10px;"> -->
<!-- 						<div class="f-img-add-btn">  -->
<!-- 							<img class="detail-base64-img" src="https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTNfODgg/MDAxNjAyNjAwNjEwNDQ1.iqEge0q4paQfA8uRP40OFnVKr5u-yf3sqL32-p6riy8g.u4QulDVjhxzdUc0dWxZmw6TyMJ2PUpgYA5Rci0aDK_Yg.JPEG.dkzlffk/SE-69512333-005d-4acc-ba21-78a3f6203da6.jpg?type=w800"/>  -->
<!-- 							<img class="delete-btn" src="./image/delete.png"/>  -->
<!-- 						</div>  -->
<!-- 					</div> -->
				</div>
			
				
				<!-- <button id="test-btn" class="f-btn long">이미지 뽑아내기</button> -->
				<button id="submit-btn" class="f-btn long" style="margin-bottom: 100px;">가게 등록하기</button>
			
			
			</div>
		</div>
	</main>
	

	
	
	
</body>

</html>