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

    @GetMapping("/getAuctionByRegisterId/{id}")
    public ResponseEntity<?> getAuctionByRegisterId(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(auctionService.getAuctionByRegisterId(id));
    }

    @GetMapping("/getAuctionPostOfUser/{id}")
    public ResponseEntity<?> getAuctionPostOfUser(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(auctionService.getAuctionPostOfUser(id));
    }

    @GetMapping("/unpaidUserAuctionRegistration/{id}")
    public ResponseEntity<?> unpaidUserAuctionRegistration(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(auctionService.unpaidUserAuctionRegistration(id));
    }

    @PutMapping("/browseAuctionPost/{id}")
    public ResponseEntity<?> browseAuctionPost(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(auctionService.browseAuctionPost(id));
    }

    @PutMapping("updateAuction")
    public ResponseEntity<?> updateAuction(@RequestBody AuctionModel auctionModel) throws NullObjectExeption, ParseException {
        return ResponseEntity.ok(auctionService.updateAuction(auctionModel));
    }

    @RequestMapping(value = "/deleteAuctionOfOwner", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteAuctionOfOwner(@RequestParam(name = "auction-id") Long auctionId, // file js trả về 2 tham số này ở đâu
                                                  @RequestParam(name = "user-id" , required = false) Long userId) {
        return ok(auctionService.deleteAuctionOfOwner(auctionId, userId));
    }

    @RequestMapping(value = "/deleteAuctionById/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteAuctionById(@PathVariable(value = "id") Long id) {
        return ok(auctionService.deleteAuctionById(id));
    }

}


