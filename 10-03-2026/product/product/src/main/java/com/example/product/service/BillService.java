package com.example.product.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.product.dto.request.BillRequest;
import com.example.product.dto.request.ProductRequest;
import com.example.product.dto.response.ProductResponse;
import com.example.product.dto.response.BillResponse;

@Service
public class BillService {

    public BillResponse generateBill(BillRequest request){

        List<ProductResponse> productList = new ArrayList<>();

        double totalAmount = 0;

        for(ProductRequest p : request.getProducts()){

            double total = p.getPrice() * p.getQuantity();

            totalAmount += total;

            productList.add(
                    new ProductResponse(
                            p.getName(),
                            p.getPrice(),
                            p.getQuantity(),
                            total
                    )
            );
        }

        double tax = totalAmount * 0.18;

        double netTotal = totalAmount + tax;

        return new BillResponse(productList,totalAmount,tax,netTotal);
    }
}