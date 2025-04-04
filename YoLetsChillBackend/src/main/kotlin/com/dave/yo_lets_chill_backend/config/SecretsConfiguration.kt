package com.dave.yoletschillbackend.config

import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.PropertySource

@Configuration
@PropertySource(factory = YamlPropertySourceFactory::class, value = ["classpath:secrets.yaml"])
class SecretsConfiguration
