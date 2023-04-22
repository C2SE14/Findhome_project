package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.entity.RealEstate;
import dtu.capstone_2.backend.model.RealEstateModel;
import dtu.capstone_2.backend.repository.RealEstateRepository;
import dtu.capstone_2.backend.service.RealEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/realEstate")
public class RealEstateController {

    @Autowired
    private RealEstateRepository realEstateRepository;

    @Autowired
    private RealEstateService realEstateService;

    @GetMapping("/getAllRealEstate")
    public ResponseEntity<?> getRealEstate(){
        return ok(realEstateService.getAllRealEstate());
    }

    @GetMapping("/getRealEstateById/{id}")
    public ResponseEntity<?> getRealEstateById(){
        return ok(realEstateService.getAllRealEstate());
    }

    @PostMapping("addStudent")
    public ResponseEntity<?> addRealEstate(@RequestBody RealEstateModel realEstateModel){
        return ResponseEntity.ok(realEstateService.addRealEstate(realEstateModel));
    }
}
