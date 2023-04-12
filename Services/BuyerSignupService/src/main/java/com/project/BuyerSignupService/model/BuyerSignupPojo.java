package com.project.BuyerSignupService.model;

import java.sql.Date;

public class BuyerSignupPojo {

	private int id;
	private String username;
	private String password;
	private String email;
	private long mobile;
	Date date;
	public BuyerSignupPojo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BuyerSignupPojo(int id, String username, String password, String email, long mobile, Date date) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.mobile = mobile;
		this.date = date;
	}
	@Override
	public String toString() {
		return "BuyerSignupPojo [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", mobile=" + mobile + ", date=" + date + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	 
	
	
}

