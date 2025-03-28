package com.dave.yo_lets_chill_backend.controllers

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.beans.factory.annotation.Value

@RestController
@RequestMapping("/api/hangout")
class HangoutController {
    @Value("\${DB_PASSWORD}")
    private lateinit var dbPassword: String
    
    @GetMapping("/helloworld")
    fun getCode() : String {
        return "Hello World: $dbPassword"
    }
}