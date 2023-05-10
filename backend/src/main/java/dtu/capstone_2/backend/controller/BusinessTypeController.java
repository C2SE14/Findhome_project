package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.repository.BusinessTypeRepository;
import dtu.capstone_2.backend.service.BusinessTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/businessType")
public class BusinessTypeController {

    @Autowired
    private BusinessTypeService businessTypeService;

    @GetMapping("/getRealEstateByBusinessTypeId/{id}")
    public ResponseEntity<?> getRealEstateByBusinessTypeId(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(businessTypeService.getRealEstateByBusinessTypeId(id));
    }

    @GetMapping("/getAllBusinessType")
    public ResponseEntity<?> getRealEstateByBusinessTypeId() {
        return ok(businessTypeService.getAllBusinessType());
    }
}
