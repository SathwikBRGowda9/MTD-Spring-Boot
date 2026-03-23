package com.example.task.controller;

import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.example.task.dto.TaskRequest;
import com.example.task.dto.TaskResponse;
import com.example.task.entity.TaskEntity;
import com.example.task.response.ApiResponse;
import com.example.task.service.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    // BULK INSERT USING LIST
    @PostMapping
    public ApiResponse<List<TaskResponse>> createTasks(
            @Valid @RequestBody List<TaskRequest> requests) {

        List<TaskResponse> response = service.createTasks(requests);
        return new ApiResponse<>("success", response);
    }

    // GET TASKS WITH PAGINATION
    @GetMapping
    public ApiResponse<Page<TaskResponse>> getTasks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<TaskEntity> pagedTasks = service.getTasks(pageable);

        // Convert Page<TaskEntity> → Page<TaskResponse>
        Page<TaskResponse> response = pagedTasks.map(task -> TaskResponse.builder()
                .id(task.getId())
                .title(task.getTitle())
                .description(task.getDescription())
                .status(task.getStatus())
                .build()
        );

        return new ApiResponse<>("success", response);
    }

    // DELETE TASK
    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteTask(@PathVariable Long id){
        service.deleteTask(id);
        return new ApiResponse<>("success", "Task Deleted");
    }
}