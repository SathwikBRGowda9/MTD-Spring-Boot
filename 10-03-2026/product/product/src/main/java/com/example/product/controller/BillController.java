package com.example.product.controller;

import org.springframework.web.bind.annotation.*;

import com.example.product.dto.request.BillRequest;
import com.example.product.dto.response.ApiResponse;
import com.example.product.dto.response.BillResponse;
import com.example.product.service.BillService;

@RestController
@RequestMapping("/bill")
public class BillController {

    private final BillService billService;

    public BillController(BillService billService) {
        this.billService = billService;
    }

    
    @PostMapping("/generate")
    public ApiResponse generateBill(@RequestBody BillRequest request) {

        BillResponse bill = billService.generateBill(request);

        return new ApiResponse("success", bill);
    }
}