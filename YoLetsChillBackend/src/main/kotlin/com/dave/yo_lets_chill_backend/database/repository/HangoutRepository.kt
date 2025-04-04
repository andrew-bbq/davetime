package com.dave.yoletschillbackend.database.repository

import com.dave.yoletschillbackend.database.model.Hangout
import org.socialsignin.spring.data.dynamodb.repository.EnableScan
import org.springframework.data.repository.CrudRepository

@EnableScan
interface HangoutRepository : CrudRepository<Hangout, String> {
    fun findByCode(code: String): List<Hangout>
}
