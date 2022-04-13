package com.app.dtos;

import com.sun.istack.NotNull;

public class Credentials {
	@NotNull
	private String email;

	@NotNull
	private String password;

	public Credentials() {

	}

	public Credentials(@NotNull String email, @NotNull String password) {
		super();
		this.email = email;
		this.password = password;
	}

	@Override
	public String toString() {
		return String.format("Credentials [email=%s, password=%s]", email, password);
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
