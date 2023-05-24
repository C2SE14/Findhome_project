package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.entity.AuctionResult;
import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.AuctionResultModel;
import dtu.capstone_2.backend.service.AuctionResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auctionResult")
public class AuctionResultController {

    @Autowired
    private AuctionResultService auctionResultService;



    @PostMapping("addAuctionResult")
    public ResponseEntity<?> addAuctionResult(@RequestBody AuctionResultModel auctionResultModel) {
        return ResponseEntity.ok(auctionResultService.addAuctionResult(auctionResultModel));
    }

    @GetMapping("/getAllAuctionResult")
    public ResponseEntity<?> getAllAuctionResult() {
        return ok(auctionResultService.getAllAuctionResult());
    }
}
