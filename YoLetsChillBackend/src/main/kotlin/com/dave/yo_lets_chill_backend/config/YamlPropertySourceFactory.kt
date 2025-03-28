package com.dave.yo_lets_chill_backend.config

import org.springframework.core.env.PropertiesPropertySource
import org.springframework.core.env.PropertySource
import org.springframework.core.io.support.PropertySourceFactory
import org.springframework.beans.factory.config.YamlPropertiesFactoryBean
import org.springframework.core.io.support.EncodedResource
import java.io.IOException
import java.util.Properties

class YamlPropertySourceFactory : PropertySourceFactory {
    @Throws(IOException::class)
    override fun createPropertySource(name: String?, resource: EncodedResource): PropertySource<*> {
        val yamlFactory = YamlPropertiesFactoryBean()
        yamlFactory.setResources(resource.resource)
        val properties: Properties? = yamlFactory.getObject()
        return PropertiesPropertySource(resource.resource.filename ?: "unknown", properties ?: Properties())
    }
}