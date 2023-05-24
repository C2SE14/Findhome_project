package dtu.capstone_2.backend.controller;


import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.UserModel;
import dtu.capstone_2.backend.service.BusinessTypeService;
import dtu.capstone_2.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getRealEstateByUserId/{id}")
    public ResponseEntity<?> getRealEstateByUserId(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(userService.getRealEstateByUserId(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(userService.getUserById(id));
    }

    @PutMapping("/updateUser")
    public ResponseEntity<?> updateUser(@RequestBody UserModel userModel){
        return ok(userService.updateUser(userModel));
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllUser() throws NullObjectExeption {
        return ok(userService.getAllUser());
    }

    @GetMapping("/getUserInAuctionWithId/{id}")
    public ResponseEntity<?> getUserInAuctionWithId(@PathVariable(value = "id") Long id) throws NullObjectExeption {
        return ok(userService.getUserInAuctionWithId(id));
    }

    @RequestMapping(value = "/deleteUserById/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUserById(@PathVariable(value = "id") Long id) {
        return ok(userService.deleteUserById(id));
    }

}
