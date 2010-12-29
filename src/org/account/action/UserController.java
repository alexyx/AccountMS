package org.account.action;

import org.account.action.util.JSONHeaders;
import org.account.action.util.RESTfulMethod;
import org.account.model.UserModel;
import org.account.service.UserService;
import org.apache.struts2.rest.HttpHeaders;

import com.opensymphony.xwork2.ModelDriven;

public class UserController implements RESTfulMethod, ModelDriven<UserModel> {

	private UserModel loginModel = new UserModel();
	private UserService userService;

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/**
	 * get
	 * 
	 * @return
	 * @throws Exception
	 */
	@Override
	public HttpHeaders index() throws Exception {
		userService.userIsLogin(loginModel);
		return new JSONHeaders();
	}

	@Override
	public HttpHeaders create() throws Exception {
		userService.signIn(loginModel);
		return new JSONHeaders();
	}

	@Override
	public HttpHeaders update() throws Exception {
		return new JSONHeaders();
	}

	@Override
	public HttpHeaders destroy() throws Exception {
		return new JSONHeaders();
	}

	@Override
	public HttpHeaders show() throws Exception {
		return new JSONHeaders();
	}

	@Override
	public HttpHeaders edit() throws Exception {
		return new JSONHeaders();
	}

	@Override
	public HttpHeaders editNew() throws Exception {
		return new JSONHeaders();
	}

	@Override
	public UserModel getModel() {
		return loginModel;
	}
}