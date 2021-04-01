package com.lunetzorg.keuzewijzer.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hardware_tool")

public class ToolEntity {

	private long Id;
	private String nameHardwareTool;
//	private String descriptionHardwareTool;
	private String officialWebpageHardwareTool;
		
	public ToolEntity() {
		
	}
	
//	public ToolEntity(long id, String nameHardwareTool, String officialWebpageHardwareTool) {
//		super();
//		Id = id;
//		this.nameHardwareTool = nameHardwareTool;
//		this.officialWebpageHardwareTool = officialWebpageHardwareTool;
//	}

	@Id
    @GeneratedValue
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	
    @Column(name="name_hardware_tool")
	public String getNameHardwareTool() {
		return nameHardwareTool;
	}
	public void setNameHardwareTool(String nameHardwareTool) {
		this.nameHardwareTool = nameHardwareTool;
	}
	
	
	@Column(name="official_webpage_hardware_tool")
	public String getOfficialWebpageHardwareTool() {
		return officialWebpageHardwareTool;
	}

	public void setOfficialWebpageHardwareTool(String officialWebpageHardwareTool) {
		this.officialWebpageHardwareTool = officialWebpageHardwareTool;
	}

	@Override
	public String toString() {
		return "ToolEntity [Id=" + Id + ", nameHardwareTool=" + nameHardwareTool + ", officialWebpageHardwareTool="
				+ officialWebpageHardwareTool + "]";
	}

	
//	 @Column(name="description _hardware_tool")
//	public String getDescriptionHardwareTool() {
//		return descriptionHardwareTool;
//	}
//
//	public void setDescriptionHardwareTool(String descriptionHardwareTool) {
//		this.descriptionHardwareTool = descriptionHardwareTool;
//	}

	
	
	
}