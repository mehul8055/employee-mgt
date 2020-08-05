package com.mehul.controller;

import java.util.Date;
import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@PostMapping("/employees")
	public String createEmployee(@RequestBody Employee employee) {
		LOGGER.debug("Saving Employee started...");
		Date today = new Date(System.currentTimeMillis());
		employee.setCreatedDate(today);
		employee.setLastModifiedDate(today);
		employeeRepository.save(employee);
		LOGGER.debug("Saving Employee completed...");
		return "Employee Created!! ";
	}
	
	@GetMapping("/employees")
	public List<Employee> getEmployees(){
		LOGGER.debug("Fetching employees started!");
		List<Employee> employees = employeeRepository.findAll();
		LOGGER.debug("Fetching employees started!");
		return employees;
	} 
	
	@DeleteMapping("/employees/id")
	public String updateEmployee(@PathVariable("id") String id) {
		employeeRepository.deleteById(Long.parseLong(id));
		return "Employee Deleted!!";
		
	}
}
