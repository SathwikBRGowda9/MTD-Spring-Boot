package com.example.mysqlDemo.controller;

import org.springframework.web.bind.annotation.*;

import com.example.mysqlDemo.Service.StudentService;
import com.example.mysqlDemo.dto.request.StudentRequest;
import com.example.mysqlDemo.dto.responce.ApiResponce;
import com.example.mysqlDemo.dto.responce.StudentResponce;

@RestController
@RequestMapping("/students")
public class sStudentController {

    private final StudentService studentService;

    public sStudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/save")
    public ApiResponce<StudentResponce> saveStudent(@RequestBody StudentRequest studentRequest){

        StudentResponce response = studentService.saveStudent(studentRequest);
        return new ApiResponce<>("success", response);
    }

    @PostMapping("/{id}/register")
    public ApiResponce<StudentResponce> assignRegister(
            @PathVariable Long id,
            @RequestBody StudentRequest studentRequest){

        StudentResponce response =
                studentService.assignRegistration(id, studentRequest.getRegNumber());

        return new ApiResponce<>("success", response);
    }
}