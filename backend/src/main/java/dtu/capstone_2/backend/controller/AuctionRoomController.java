package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.entity.AuctionRoom;
import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.AuctionRoomModel;
import dtu.capstone_2.backend.repository.AuctionRoomRepository;
import dtu.capstone_2.backend.service.AuctionRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auctionRoom")
public class AuctionRoomController {

    @Autowired
    private AuctionRoomService auctionRoomService;

    @PostMapping("saveTheBid")
    public ResponseEntity<?> saveTheBid(@RequestBody AuctionRoomModel auctionRoomModel) throws NullObjectExeption, ParseException {
        return ResponseEntity.ok(auctionRoomService.saveTheBid(auctionRoomModel));
    }

    @GetMapping("/getAuctionRoomByAuctionId/{id}")
    public ResponseEntity<?> getAuctionRoomByAuctionId(@PathVariable(value = "id") Long id)  {
        return ok(auctionRoomService.getAuctionRoomByAuctionId(id));
    }
}
