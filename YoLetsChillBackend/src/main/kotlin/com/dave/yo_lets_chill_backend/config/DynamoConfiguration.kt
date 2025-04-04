package com.dave.yoletschillbackend.config

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.dynamodb.DynamoDbClient
import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider
import com.amazonaws.auth.AWSStaticCredentialsProvider
import com.amazonaws.auth.BasicAWSCredentials
import com.amazonaws.client.builder.AwsClientBuilder
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig
import org.springframework.context.annotation.Primary

@Configuration
public class DynamoConfiguration(
    @Value("\${aws.accessKeyId}") private val accessKey: String,
    @Value("\${aws.secretAccessKey}") private val secretKey: String,
    @Value("\${aws.region}") private val region: String
) {
    @Primary
    @Bean
    fun dynamoDBMapper(amazonDynamoDB: AmazonDynamoDB): DynamoDBMapper {
        return DynamoDBMapper(amazonDynamoDB, DynamoDBMapperConfig.DEFAULT)
    }

    @Bean
    fun dynamoDbClient(awsCredentials: BasicAWSCredentials): DynamoDbClient {
        val awsCredentialsProvider = AWSStaticCredentialsProvider(awsCredentials)
        return DynamoDbClient.builder()
                .region(Region.of(region))
                .credentialsProvider(ProfileCredentialsProvider.create())
                .build()
    }

    @Bean
    fun awsCredentials() = BasicAWSCredentials(accessKey, secretKey)
}