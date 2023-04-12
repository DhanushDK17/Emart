package com.project.BuyerSignupService.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.BuyerSignupService.dao.entity.BuyerSignupEntity;

@Repository
public interface BuyerSignupDao extends JpaRepository<BuyerSignupEntity,Integer>{

}
