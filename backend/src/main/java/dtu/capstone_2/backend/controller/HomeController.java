package dtu.capstone_2.backend.controller;

import dtu.capstone_2.backend.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @Autowired
    private HomeService homeService;

    @GetMapping(value = {"/", "home"})
    public ResponseEntity<?> home() {
        return ResponseEntity.ok(homeService.homeString());
    }
}
