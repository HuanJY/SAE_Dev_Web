package com.SAES4.SAE2.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Définissez le chemin approprié pour vos API
                .allowedOrigins("http://localhost:5174") // Autorisez l'origine de votre frontend React
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Autorisez les méthodes HTTP nécessaires
                .allowCredentials(true); // Autorisez les cookies, si nécessaire
    }
}