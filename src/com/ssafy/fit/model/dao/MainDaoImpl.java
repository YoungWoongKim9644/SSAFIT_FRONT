package com.ssafy.fit.model.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.ssafy.fit.model.Video;

public class MainDaoImpl implements MainDao {
	private List<Video> list;
	private static MainDaoImpl instance;
	public static MainDao getInstance() {
		if(instance == null) instance = new MainDaoImpl();
		return instance;
	}
	private MainDaoImpl() {
		list = new ArrayList<Video>();
		list.add(new Video("gMaB-fG4u4g", "ThankyouBUBU", 10, "전신", "전신 다이어트 최고의 운동 [칼소폭 찐 핵핵매운맛]"));
		list.add(new Video("54tTYO-vU2E", "ThankyouBUBU", 12, "상체", "상체 다이어트 최고의 운동 BEST [팔뚝살/겨드랑이살/등살/가슴어깨라인]"));
	}
	
	@Override
	public List<Video> selectInterestViewFitVideo() {
		List<Video> popular = new ArrayList<Video>();
		for(Video v : list) {
			popular.add(v);
		}
		Collections.reverse(popular);

		return popular;
	}

	@Override
	public List<Video> selectPartVideo() {
		List<Video> body = new ArrayList<Video>();
		List<Video> upper = new ArrayList<Video>();
		List<Video> lower = new ArrayList<Video>();
		List<Video> stomach = new ArrayList<Video>();
		for(Video v : list) {
			if(v.getFitPartName().equals("전신")) {
				body.add(v);
			} else if(v.getFitPartName().equals("상체")) {
				upper.add(v);
			} else if(v.getFitPartName().equals("하체")) {
				lower.add(v);
			} else {
				stomach.add(v);
			}
		}
		
		return null;
	}

}
