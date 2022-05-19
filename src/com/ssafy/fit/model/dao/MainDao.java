package com.ssafy.fit.model.dao;

import java.util.List;

import com.ssafy.fit.model.Video;

public interface MainDao {
	public List<Video> selectInterestViewFitVideo();
	
	public List<Video> selectPartVideo();
}
