package com.app.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdoptionDTO {
	
	private Integer id;
	private Integer orphanId;
	private Integer userId;
	private Integer staffId;
    private String status;
	@Temporal(TemporalType.DATE)
	private Date regDate;
}
