package com.example.product.dto.response;

import java.util.List;

public class BillResponse {

    private List<ProductResponse> products;
    private double totalAmount;
    private double tax;
    private double netTotal;

    public BillResponse(List<ProductResponse> products,double totalAmount,double tax,double netTotal) {
        this.products = products;
        this.totalAmount = totalAmount;
        this.tax = tax;
        this.netTotal = netTotal;
    }

    public List<ProductResponse> getProducts() {
        return products;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public double getTax() {
        return tax;
    }

    public double getNetTotal() {
        return netTotal;
    }
}