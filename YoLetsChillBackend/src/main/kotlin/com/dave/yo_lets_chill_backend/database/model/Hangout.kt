package com.dave.yoletschillbackend.database.model

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable

@DynamoDBTable(tableName = "hangouts")
data class Hangout(
    @field:DynamoDBHashKey
    @field:DynamoDBAttribute(attributeName = "code")
    val code: String,

    @field:DynamoDBAttribute(attributeName = "title")
    val title: String,
)
