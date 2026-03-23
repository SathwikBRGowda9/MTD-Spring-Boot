package com.example.mysqlDemo.Service;

import org.springframework.stereotype.Service;

import com.example.mysqlDemo.dto.request.StudentRequest;
import com.example.mysqlDemo.dto.responce.StudentResponce;
import com.example.mysqlDemo.entity.RegosterNumberEntity;
import com.example.mysqlDemo.entity.StudentEntity;
import com.example.mysqlDemo.repositary.RegisterNumberRepository;
import com.example.mysqlDemo.repositary.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final RegisterNumberRepository registerNumberRepository;

    public StudentService(StudentRepository studentRepository,
                          RegisterNumberRepository registerNumberRepository) {
        this.studentRepository = studentRepository;
        this.registerNumberRepository = registerNumberRepository;
    }

    // Save Student
    public StudentResponce saveStudent(StudentRequest studentRequest) {

        StudentEntity student = new StudentEntity();
        student.setName(studentRequest.getName());

        StudentEntity savedStudent = studentRepository.save(student);

        return new StudentResponce(
                savedStudent.getId(),
                savedStudent.getName(),
                null
        );
    }

    // Assign Registration Number
    public StudentResponce assignRegistration(Long studentId, String regNumber) {

        StudentEntity student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new RuntimeException("Student not found with id: " + studentId));

        RegosterNumberEntity register = new RegosterNumberEntity();
        register.setRegNumber(regNumber);

        RegosterNumberEntity savedRegister = registerNumberRepository.save(register);

        student.setRegosterNumber(savedRegister);

        studentRepository.save(student);

        return new StudentResponce(
                student.getId(),
                student.getName(),
                savedRegister.getRegNumber()
        );
    }
}