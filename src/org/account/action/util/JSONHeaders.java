package org.account.action.util;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.rest.HttpHeaders;

import static javax.servlet.http.HttpServletResponse.SC_CREATED;

public class JSONHeaders implements HttpHeaders {

	@Override
	public String apply(HttpServletRequest request, HttpServletResponse response, Object target) {
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Last-Modified", new Date().getTime());
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		return null;
	}
	@Override
	public int getStatus() {
		return SC_CREATED;
	}

}
