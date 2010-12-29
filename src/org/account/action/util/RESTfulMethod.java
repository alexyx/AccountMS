package org.account.action.util;

import org.apache.struts2.rest.HttpHeaders;

public interface RESTfulMethod {
	
	/**
	 * HTTP GET
	 * @return
	 * @throws Exception
	 */
	public HttpHeaders index() throws Exception;
	
	/**
	 * HTTP POST
	 * @return
	 * @throws Exception
	 */
	public HttpHeaders create() throws Exception;
	
	/**
	 * HTTP PUT + id
	 * @return
	 * @throws Exception
	 */
	public HttpHeaders update() throws Exception;
	
	/**
	 * HTTP DELETE + id
	 * @return
	 * @throws Exception
	 */
	public HttpHeaders destroy() throws Exception;
	
	/**
	 * HTTP GET + id
	 * @return
	 * @throws Exception
	 */
	public HttpHeaders show() throws Exception;
	
	/**
	 * HTTP GET + id + /edit
	 * @return
	 * @throws Exception
	 */
	public HttpHeaders edit() throws Exception;
	
	/**
	 * HTTP GET + id + /editNew
	 * @return
	 * @throws Exception
	 */
	public HttpHeaders editNew() throws Exception;
}
