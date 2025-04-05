package com.dave.yoletschillbackend.database.model

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverted
import com.dave.yoletschillbackend.database.util.LongPairConverter


@DynamoDBDocument
data class UserAvailability(
    @field:DynamoDBAttribute(attributeName = "name")
    var name: String = "",

    @field:DynamoDBAttribute(attributeName = "email")
    var email: String = "",

    @field:DynamoDBTypeConverted(converter = LongPairConverter::class)
    @field:DynamoDBAttribute(attributeName = "times")
    var times: List<Pair<Long, Long>> = emptyList()
)
