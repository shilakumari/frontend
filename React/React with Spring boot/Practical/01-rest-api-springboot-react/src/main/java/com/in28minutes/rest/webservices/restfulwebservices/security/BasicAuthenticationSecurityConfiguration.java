package com.in28minutes.rest.webservices.restfulwebservices.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	//Filter Chain
	//Authenticate All Requests
	//Basic Authentication
	//Disable csrf
	//stateless rest api
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		/*//1. this tell that all request should be authorized
		http.authorizeHttpRequests(
				auth -> auth.anyRequest().authenticated());
		//2.This configured basic authentication
		http.httpBasic(Customizer.withDefaults());
		//3. When disable csrf, then make sure is to not have any session. Without session means "stateless rest api"
		http.sessionManagement(
				session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		//4.Disable csrf
		http.csrf().disable();
		return http.build();*/
		
		//Http supports chaining of calls
		return http.authorizeHttpRequests(
				//1. Response to preflight request doesn't pass access control check
				//2. Basic Auth
				auth -> auth
				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.anyRequest().authenticated())
			.httpBasic(Customizer.withDefaults())
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.csrf().disable()
			.build();
	}
}
