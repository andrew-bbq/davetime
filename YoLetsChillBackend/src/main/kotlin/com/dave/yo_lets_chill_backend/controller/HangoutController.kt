package com.dave.yoletschillbackend.controller

import com.dave.yoletschillbackend.database.model.Hangout
import com.dave.yoletschillbackend.database.repository.HangoutRepository
import com.dave.yoletschillbackend.service.HangoutService
import com.dave.yoletschillbackend.controller.contract.GetHangoutRequestBody
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.PathVariable
import com.dave.yoletschillbackend.database.model.UserAvailability
import java.util.Date

@RestController
@RequestMapping("/api/hangout")
class HangoutController (
    private val hangoutService: HangoutService
) {
    @GetMapping("/create")
    fun createHangout(): Hangout {
        return hangoutService.createHangout()
    }

    @GetMapping("/{code}")
    fun getHangout(
        @PathVariable code: String,
        @RequestBody body: GetHangoutRequestBody?
    ): ResponseEntity<Hangout> {
        hangoutService.getHangout(code, body?.password)?.let {
            return ResponseEntity.ok()
                .body(it)
        }
        return ResponseEntity.notFound().build()
    }
}
