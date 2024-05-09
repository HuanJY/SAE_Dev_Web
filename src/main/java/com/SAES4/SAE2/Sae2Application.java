package com.SAES4.SAE2;

import com.SAES4.SAE2.config.WebConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class Sae2Application {

	public static void main(String[] args) {

		WebConfig webConfig = new WebConfig();

		webConfig.addCorsMappings(new CorsRegistry());


		SpringApplication.run(Sae2Application.class, args);
	}

}
