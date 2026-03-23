package com.example.product.dto.request;

import java.util.List;

public class BillRequest {

    private List<ProductRequest> products;

    public List<ProductRequest> getProducts() {
        return products;
    }

    public void setProducts(List<ProductRequest> products) {
        this.products = products;
    }
}