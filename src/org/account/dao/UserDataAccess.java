package org.account.dao;

import java.sql.SQLException;
import java.util.List;

import org.account.dao.domain.User;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;

/**
 * 用户数据访问
 * @author alex
 *
 */
public class UserDataAccess {
	
	/** @see HibernateTemplate */
	private HibernateTemplate hibernateTemplate;
	
//	/**
//	 * 构造一个 User 数据访问对象
//	 * @param hibernateTemplate
//	 */
//	public UserDataAccess(HibernateTemplate hibernateTemplate) {
//		this.hibernateTemplate = hibernateTemplate;
//	}
	
	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	
	/**
	 * 以 userName, password 参数获取 User 对象,如不存在返回 NULL.
	 * @param userName
	 * @param password
	 * @return
	 */
	public User findByUser(String userName, String password) {
		String HQL = "from User T_USER where T_USER.userName=:userName and T_USER.password=:password";
		List<User> users = hibernateTemplate.findByNamedParam(HQL, new String[]{"userName", "password"}, new String[]{userName, password});
		return users.size() == 1 ? users.get(0) : null;
	}
	
	/**
	 * 以 UserID 参数获取 User 对象.
	 * @param UserID
	 * @return
	 */
	public User findById(Long UserID) {
		return (User) hibernateTemplate.get(User.class, UserID);
	}
	
	/**
	 * 保存 User 对象
	 * @param user
	 */
	public void save(User user) {
		hibernateTemplate.save(user);
	}
	
	/**
	 * 删除 User 对象
	 * @param user
	 */
	public void delete(User user) {
		hibernateTemplate.delete(user);
	}
	
	/**
	 * 分页获取 User 对象
	 * @param start
	 * @param limit
	 * @return
	 */
	public List<User> findLimit(final int start, final int limit) {
		//以匿名内类部方式实现 HibernateCallback 接口
		return hibernateTemplate.executeFind(new HibernateCallback() {
			@Override
			public Object doInHibernate(Session s) throws HibernateException,
					SQLException {
				Query query = s.createQuery("from User T_USER");
				query.setFirstResult(start);
				query.setMaxResults(limit);
				return (List<User>) query.list();
			}
		});
	}
}
