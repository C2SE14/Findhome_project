package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.entity.RealEstate;
import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.EstateSearchModel;
import dtu.capstone_2.backend.model.QuickSearchEstateModel;
import dtu.capstone_2.backend.model.RealEstateModel;
import dtu.capstone_2.backend.repository.RealEstateRepository;
import dtu.capstone_2.backend.service.RealEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

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
    public ResponseEntity<?> getRealEstate() throws NullObjectExeption {
        return ok(realEstateService.getAllRealEstate());
    }

    @GetMapping("/getRealEstateById/{id}")
    public ResponseEntity<?> getRealEstateById(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(realEstateService.getRealEstateById(id));
    }

    @PostMapping("addRealEstate")
    public ResponseEntity<?> addRealEstate(@RequestBody RealEstateModel realEstateModel) throws NullObjectExeption, ParseException {
        return ResponseEntity.ok(realEstateService.addRealEstate(realEstateModel));
    }

    @PutMapping("updateRealEstate")
    public ResponseEntity<?>  updateRealEstate(@RequestBody RealEstateModel realEstateModel){
        return ResponseEntity.ok(realEstateService.updateRealEstate(realEstateModel));
    }

    @RequestMapping(value = "/deleteRealEstate/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteRealEstate(@PathVariable(value = "id") Long id) {
        return ok(realEstateService.deleteRealEstate(id));
    }

//    @RequestMapping(value = "/search", method = RequestMethod.POST)
//    public ResponseEntity<?> findRealEstateByAddressOrEstateName(@RequestBody String data) throws NullObjectExeption {
//
//        if(data.isEmpty() || data.isBlank()){
//            data = "";
//        }
//        return ok(realEstateService.findRealEstateByAddressOrEstateName(data));
//    }

    @RequestMapping(value = "/search", method = RequestMethod.POST)
    public ResponseEntity<?> searchData(@RequestBody EstateSearchModel model) {
        return ok(realEstateService.searchData(model));
    }

    @RequestMapping(value = "/QuickSearch", method = RequestMethod.POST)
    public ResponseEntity<?> QuickSearchEstate(@RequestBody QuickSearchEstateModel model) {
        return ok(realEstateService.QuickSearchEstate(model));
    }

    @RequestMapping(value = "/deleteRealEstate", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteRealEstate(@RequestParam(name = "real-estate-id") Long realEstateId, // file js trả về 2 tham số này ở đâu
                                              @RequestParam(name = "user-id", required = false) Long userId) {
        return ok(realEstateService.deleteRealEstateOfUser(realEstateId, userId));
    }
//http://localhost:8080/product?category-id=1&sort=date

}
