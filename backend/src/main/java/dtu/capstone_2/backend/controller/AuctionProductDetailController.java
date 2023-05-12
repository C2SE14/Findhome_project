package dtu.capstone_2.backend.controller;


import dtu.capstone_2.backend.entity.AuctionProductDetails;
import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.AuctionProductDetailsModel;
import dtu.capstone_2.backend.repository.AuctionProductDetailRepository;
import dtu.capstone_2.backend.service.AuctionProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;

import java.text.ParseException;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auctionProductDetail")
public class AuctionProductDetailController {

    @Autowired
    private AuctionProductDetailService auctionProductDetailService;

    @GetMapping("/getProductDetailByAuction/{id}")
    public ResponseEntity<?> getProductDetailByAuction(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(auctionProductDetailService.getByAuctionId(id));
    }

    @PostMapping("addProductDetailByAuction")
    public ResponseEntity<?> addRealEstate(@RequestBody AuctionProductDetailsModel auctionProductDetailsModel) throws NullObjectExeption, ParseException {
        return ResponseEntity.ok(auctionProductDetailService.addProductDetail(auctionProductDetailsModel));
    }
}
