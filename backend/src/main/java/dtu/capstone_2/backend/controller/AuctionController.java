package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

import static org.springframework.http.ResponseEntity.ok;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auction")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;



    @PostMapping("addAuction")
    public ResponseEntity<?> addRealEstate(@RequestBody AuctionModel auctionModel) throws NullObjectExeption, ParseException {
        return ResponseEntity.ok(auctionService.addAuction(auctionModel));
    }

    @GetMapping("/getAllAuction")
    public ResponseEntity<?> getAllAuction() throws NullObjectExeption {
        return ok(auctionService.getAllAuctionModel());
    }

    @GetMapping("/getAuctionById/{id}")
    public ResponseEntity<?> getAuctionById(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(auctionService.getAuctionById(id));
    }
}
