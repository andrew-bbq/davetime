package com.dave.yoletschillbackend.database.util

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverter
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTyped

class LongPairConverter : DynamoDBTypeConverter<String, List<Pair<Long, Long>>> {
    override fun convert(input: List<Pair<Long, Long>>?): String? {
        return input?.joinToString("|") { "${it.first},${it.second}" }
    }

    override fun unconvert(output: String?): List<Pair<Long, Long>>? {
        return output?.split("|")
            ?.map { it.split(",") }
            ?.map { Pair(it[0].toLong(), it[1].toLong()) }
    }
}