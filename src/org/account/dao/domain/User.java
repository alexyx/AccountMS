package org.account.dao.domain;

import java.io.Serializable;

public class User implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -485408026841176703L;
	private Long id;
	private String userName;
	private String nickName;
	private String password;
	private String descText;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDescText() {
		return descText;
	}

	public void setDescText(String descText) {
		this.descText = descText;
	}

}
