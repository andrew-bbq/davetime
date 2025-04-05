package com.dave.yoletschillbackend.service

import com.dave.yoletschillbackend.database.model.Hangout
import com.dave.yoletschillbackend.database.repository.HangoutRepository
import com.dave.yoletschillbackend.database.model.UserAvailability
import org.springframework.stereotype.Service
import java.util.Date

@Service
class HangoutService (
    private val repository: HangoutRepository
) {
    fun getHangout(code: String, password: String?): Hangout? {
        repository.findByCode(code).first()?.let {
            // Just since this optically looks bad, this isn't supposed to be a secure password
            // This value is meant to be shared across multiple users for a semi-public board
            // I would salt/hash this and compare/store that if this was for individual users
            if (it.password == null || it.password == password) return it
        }
        return null
    }

    fun createHangout(): Hangout {
        val hangout = Hangout(
            code = "123456",
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
        repository.save(hangout)
        return hangout
    }
}
