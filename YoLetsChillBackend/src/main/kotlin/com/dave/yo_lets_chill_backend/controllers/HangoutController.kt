package com.dave.yoletschillbackend.controllers

import com.dave.yoletschillbackend.database.model.Hangout
import com.dave.yoletschillbackend.database.repository.HangoutRepository
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.PathVariable

@RestController
@RequestMapping("/api/hangout")
class HangoutController (
    private val repository: HangoutRepository
) {
    @Value("\${aws.accessKeyId}")
    private lateinit var dbPassword: String
    
    @GetMapping("/helloworld")
    fun getCode() : String {
        return "Hello World: $dbPassword"
    }

    @GetMapping("/insert/{code}")
    fun createHangout() : Int {
        return 4
    }

    @GetMapping("/{code}")
    fun getHangout(@PathVariable code: String): List<Hangout>? {
        return repository.findByCode(code)
    }
}