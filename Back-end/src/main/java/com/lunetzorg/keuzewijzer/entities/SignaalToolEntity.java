package com.lunetzorg.keuzewijzer.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="signaal_tool")
public class SignaalToolEntity {
	private long Id;
	private String name;
	private String describe;
	private String lastq;
	
	public SignaalToolEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	@Id
    @GeneratedValue
    @Column(name="Id")
	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	@Column(name="name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name="describe")
	public String getDescribe() {
		return describe;
	}

	public void setDescribe(String describe) {
		this.describe = describe;
	}

	@Column(name="lastq")
	public String getLastq() {
		return lastq;
	}

	public void setLastq(String lastq) {
		this.lastq = lastq;
	}


	@Override
	public String toString() {
		return "SignaalToolEntity [Id=" + Id + ", name=" + name + ", describe=" + describe + ", lastq=" + lastq + "]";
	}
	
	
	
	

}
