<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


    
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src = "./js/headert.js"></script>

<header>
	<div class="page-inner d-flex j-c-space-between a-i-center">
		<img style="height:60%; margin-bottom:5px;" src="./image/trip-logo.png">
		
		<div>
			<span class="menu-btn" data-page="./add-shopt">트립쉐어소개</span>
			<span class="menu-btn" data-page="./add-shopt">블로그</span>
			<span class="menu-btn" data-page="./add-shopt">여행정보</span>
			<span class="menu-btn" data-page="./add-shopt">업체등록</span>
		</div>
		
		<div>
			<c:if test = "${empty sessionScope.me}">
				<button id="go-login-btn" class="outline-btn">로그인</button>
			</c:if>
			
			<c:if test = "${not empty sessionScope.me}">
				<span style="margin-right:15px">${sessionScope.me.nickname} 님</span>
				<button id="go-logout-btn" class="outline-btn">로그아웃</button>
			</c:if>
		</div>
	</div>
</header>


		
		