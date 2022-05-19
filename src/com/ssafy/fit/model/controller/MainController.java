package com.ssafy.fit.model.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ssafy.fit.model.dao.MainDao;
import com.ssafy.fit.model.dao.MainDaoImpl;

@WebServlet("/ssafit/index")
public class MainController extends HttpServlet {
	// 비즈니스 로직 객체 선언
	private MainDao mainDao = MainDaoImpl.getInstance();
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// View 페이지에 필요한 데이터 공유
		request.setAttribute("interestList", mainDao.selectInterestViewFitVideo());
		request.setAttribute("partList", mainDao.selectPartVideo());
		
		// View 페이지 이동
		request.getRequestDispatcher("index.jsp").forward(request, response);
	}
	
}
