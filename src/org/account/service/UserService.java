package org.account.service;

import java.util.Map;

import org.account.dao.UserDataAccess;
import org.account.dao.domain.User;
import org.account.model.UserModel;

import com.opensymphony.xwork2.ActionContext;

public class UserService {
	
	private UserDataAccess userDataAccess;
	
	public void setUserDataAccess(UserDataAccess userDataAccess) {
		this.userDataAccess = userDataAccess;
	}
	
	/**
	 * 登录
	 * @param model
	 */
	public void signIn(UserModel model) {
		User user = userDataAccess.findByUser(model.getUserName(), model.getPassword());
		Map<String, Object> session = ActionContext.getContext().getSession();
		if(user != null) {
			model.setSuccess(true);
			model.setStatus("INFO");
			model.setMsg("登录成功!");
			session.put("user", user);
		}else{
			model.setSuccess(false);
			model.setStatus("INFO");
			model.setMsg("用户密跟密码不匹配, 请核实您的账户跟密码!");
		}
	}
	
	/**
	 * 是否登录
	 * @param model
	 */
	public void userIsLogin(UserModel model) {
		Map<String, Object> session = ActionContext.getContext().getSession();
		if(session.containsKey("user")){
			model.setSuccess(true);
			model.setStatus("INFO");
			model.setMsg("用户已经登录!");
		}else{
			model.setSuccess(false);
			model.setStatus("INFO");
			model.setMsg("用户未登录!");
		}
	}
	
	/**
	 * 保存用户
	 * @param model
	 */
	public void saveUser(UserModel model) {
		User user = new User();
		user.setUserName(model.getUserName());
		user.setPassword(model.getPassword());
		user.setNickName(model.getNickName());
		user.setDescText(model.getDescText());
		userDataAccess.save(user);
		model.setSuccess(true);
	}
	
	/**
	 * 删除用户
	 * @param model
	 */
	public void deleteUser(UserModel model) {
		User user = new User();
		user.setId(model.getId());
		userDataAccess.delete(user);
		model.setSuccess(true);
	}
}
