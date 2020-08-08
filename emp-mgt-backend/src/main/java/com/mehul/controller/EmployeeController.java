package com.mehul.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mehul.model.Employee;
import com.mehul.repository.EmployeeRepository;

@RestController
@RequestMapping("/emp-mgt")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	
	private static final Logger LOGGER = Logger.getLogger(EmployeeController.class);

	@Autowired 
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employees/{id}")
	public Employee getEmployee(@PathVariable("id") Long id) {
		LOGGER.debug("Employee fetching started!");
		Optional<Employee> optional = employeeRepository.findById(id);
		return optional.get();
	}
	
	@GetMapping("/employees")
	public List<Employee> getEmployees(){
		LOGGER.debug("Fetching employees started!");
		List<Employee> employees = employeeRepository.findAll();
		LOGGER.debug("Fetching employees started!");
		return employees;
	} 
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@RequestBody Employee employee, @PathVariable("id") Long id) {
		LOGGER.debug("Employee Update started!");
		//employeeRepository.deleteById(Long.parseLong(id));
		Optional<Employee> employeeOptional = employeeRepository.findById(id);

		if (!employeeOptional.isPresent())
			return employee;

		employee.setId(id);
		Date today = new Date(System.currentTimeMillis());
		employee.setLastModifiedDate(today);
		employee.setCreatedDate(today);
		Employee savedEmployee = employeeRepository.save(employee);
		return savedEmployee;
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		LOGGER.debug("Saving Employee started...");
		Date today = new Date(System.currentTimeMillis());
		employee.setCreatedDate(today);
		employee.setLastModifiedDate(today);
		Employee savedEmployee = employeeRepository.save(employee);
		LOGGER.debug("Saving Employee completed...");
		return savedEmployee;
	}

	@DeleteMapping("/employees/{id}")
	public String deleteEmployee(@PathVariable("id") Long id) {
		LOGGER.debug("Employee Delete started!");
		employeeRepository.deleteById(id);
		return "Employee Deleted!!";
	}
}
