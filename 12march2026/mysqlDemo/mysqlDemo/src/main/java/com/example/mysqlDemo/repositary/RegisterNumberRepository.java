package com.example.mysqlDemo.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mysqlDemo.entity.RegosterNumberEntity;

@Repository
public interface RegisterNumberRepository extends JpaRepository<RegosterNumberEntity, Long> {
    

}