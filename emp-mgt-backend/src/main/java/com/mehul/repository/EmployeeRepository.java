package com.mehul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mehul.model.Employee;

/**
 * @author Mehul
 *
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
