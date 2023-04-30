package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.service.TypeDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/typeDetail")
public class TypeDetailController {

    @Autowired
    private TypeDetailService typeDetailService;

    @GetMapping("/getRealEstateByTypeDetailId/{id}")
    public ResponseEntity<?> getRealEstateByTypeDetailId(@PathVariable(value = "id") Long id){
        return ResponseEntity.ok(typeDetailService.getRealEstateByTypeDetailId(id));
    }
}
