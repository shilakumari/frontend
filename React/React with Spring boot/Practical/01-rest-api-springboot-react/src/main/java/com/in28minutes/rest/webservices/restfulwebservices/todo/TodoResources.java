package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class TodoResources {
	private TodoService service;

	//Autowiring TodoService 
	public TodoResources(TodoService service) {
		super();
		this.service = service;
	}
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> retriveListTodos(@PathVariable String username) {
		return service.findByUsername(username);
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public  Todo retriveTodoById(@PathVariable String username, @PathVariable int id) {
		return service.findById(id);
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public  ResponseEntity<Void> deleteTodoById(@PathVariable String username, @PathVariable int id) {
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/todo/{id}")
	public  Todo updateTodoById(@PathVariable int id,  @RequestBody Todo todo) {
		service.updateTodo(todo);
		return todo;
	}
	
	@PostMapping("/users/{username}/todo")
	public  Todo createTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo createdTodo = service.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
		return createdTodo;
	}
}
