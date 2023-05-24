package dtu.capstone_2.backend.controller;


import dtu.capstone_2.backend.entity.AuctionRegistration;
import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.AuctionRegistrationModel;
import dtu.capstone_2.backend.service.AuctionRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auctionRegistration")
public class AuctionRegistrationController {

    @Autowired
    private AuctionRegistrationService auctionRegistrationService;

    @PostMapping("addAuctionRegistration")
    public ResponseEntity<?> addRealEstate(@RequestBody AuctionRegistrationModel auctionRegistrationModel) throws NullObjectExeption, ParseException {
        return ResponseEntity.ok(auctionRegistrationService.addAuctionRegistration(auctionRegistrationModel));
    }

    @PostMapping("updateAuctionRegistration")
    public ResponseEntity<?> updateAuctionRegistration(@RequestBody AuctionRegistrationModel auctionRegistrationModel) throws NullObjectExeption, ParseException {
        return ResponseEntity.ok(auctionRegistrationService.updateAuctionRegistration(auctionRegistrationModel));
    }

    @GetMapping("/getAuctionRegistrationsByRegisterId/{id}")
    public ResponseEntity<?> getAuctionRegistrationsByRegisterId(@PathVariable(value = "id") Long id) {
        return ok(auctionRegistrationService.getAuctionRegistrationsByRegisterId(id));
    }

    @GetMapping("/getAllAuctionRegistrationsForAdmin")
    public ResponseEntity<?> getAllAuctionRegistrationsForAdmin() {
        return ok(auctionRegistrationService.getAllAuctionRegistrationsForAdmin());
    }

    @RequestMapping(value = "/deleteRegistrationsById/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteRegistrationsById(@PathVariable(value = "id") Long id) {
        return ok(auctionRegistrationService.deleteRegistrationsById(id));
    }


}
