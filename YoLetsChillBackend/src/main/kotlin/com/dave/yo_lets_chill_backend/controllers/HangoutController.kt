package com.dave.yoletschillbackend.controllers

import com.dave.yoletschillbackend.database.model.Hangout
import com.dave.yoletschillbackend.database.repository.HangoutRepository
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.PathVariable
import com.dave.yoletschillbackend.database.model.UserAvailability
import java.util.Date

@RestController
@RequestMapping("/api/hangout")
class HangoutController (
    private val repository: HangoutRepository
) {
    @GetMapping("/helloworld")
    fun getCode() : String {
        return "Hello World"
    }

    @GetMapping("/create")
    fun createHangout() : String {
        val code = "123456"
        repository.save(
            Hangout(
                code = code,
                title = "new hangout",
                description = "new description",
                owner = "Stevey poo",
                email = "steveypoo@gmail.gov",
                password = null,
                length = 30,
                days = listOf(Date()),
                userAvailabilities = listOf(
                    UserAvailability(
                        name = "joe",
                        email = "mama@mama.mama",
                        times = listOf(Pair(1L, 2L))
                    )
                )
            )
        )
        return code
    }

    @GetMapping("/{code}")
    fun getHangout(@PathVariable code: String): List<Hangout>? {
        println("code ${code}")
        return repository.findByCode(code)
    }
}