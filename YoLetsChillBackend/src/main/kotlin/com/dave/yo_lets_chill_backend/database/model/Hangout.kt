package com.dave.yoletschillbackend.database.model

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable
import java.util.Date

@DynamoDBTable(tableName = "Hangouts")
data class Hangout(
    @field:DynamoDBHashKey
    @field:DynamoDBAttribute(attributeName = "code")
    var code: String = "",

    @field:DynamoDBAttribute(attributeName = "title")
    var title: String = "",

    @field:DynamoDBAttribute(attributeName = "description")
    var description: String = "",

    @field:DynamoDBAttribute(attributeName = "owner")
    var owner: String = "",

    @field:DynamoDBAttribute(attributeName = "email")
    var email: String = "",

    @field:DynamoDBAttribute(attributeName = "password")
    var password: String? = null,

    @field:DynamoDBAttribute(attributeName = "length")
    var length: Int = 30,

    @field:DynamoDBAttribute(attributeName = "days")
    var days: List<Date> = listOf(),

    @field:DynamoDBAttribute(attributeName = "userAvailabilities")
    var userAvailabilities: List<UserAvailability> = emptyList()
)
