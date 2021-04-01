package com.lunetzorg.keuzewijzer.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="alarm_tool")
public class AlarmToolEntity {
	
	private long Id;
	private String name;
	private String describe;
	private boolean geven;
	private boolean ontvangen;
	private boolean binnen;
	private boolean buiten;
	private boolean medicatie;
	private boolean afspraak;
	private String lastq;
	
	
	public AlarmToolEntity() {
		
	}
	
	
	@Id
    @GeneratedValue
	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}
	

	@Column(name="medicatie")
	public boolean isMedicatie() {
		return medicatie;
	}

	public void setMedicatie(boolean medicatie) {
		this.medicatie = medicatie;
	}

	
	@Column(name="afspraak")
	public boolean isAfspraak() {
		return afspraak;
	}

	public void setAfspraak(boolean afspraak) {
		this.afspraak = afspraak;
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

	@Column(name="geven")
	public boolean isGeven() {
		return geven;
	}

	public void setGeven(boolean geven) {
		this.geven = geven;
	}

	@Column(name="ontvangen")
	public boolean isOntvangen() {
		return ontvangen;
	}

	public void setOntvangen(boolean ontvangen) {
		this.ontvangen = ontvangen;
	}

	@Column(name="binnen")
	public boolean isBinnen() {
		return binnen;
	}

	public void setBinnen(boolean binnen) {
		this.binnen = binnen;
	}

	@Column(name="buiten")
	public boolean isBuiten() {
		return buiten;
	}

	public void setBuiten(boolean buiten) {
		this.buiten = buiten;
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
		return "AlarmToolEntity [Id=" + Id + ", name=" + name + ", describe=" + describe + ", geven=" + geven
				+ ", ontvangen=" + ontvangen + ", binnen=" + binnen + ", buiten=" + buiten + ", medicatie=" + medicatie
				+ ", afspraak=" + afspraak + ", lastq=" + lastq + "]";
	}



	
	
		
	

}
