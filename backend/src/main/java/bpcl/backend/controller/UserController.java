package bpcl.backend.controller;


import bpcl.backend.exception.ResourceNotFoundException;
import bpcl.backend.model.User;
import bpcl.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //add user REST API
    @PostMapping
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // get user by Staff No REST API
    @GetMapping("{staffNo}")
    public ResponseEntity<User> getUserById(@PathVariable int staffNo) {
        User user = userRepository.findById(staffNo).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return ResponseEntity.ok(user);
    }

    //update user REST API
    @PutMapping("{staffNo}")
    public ResponseEntity<User> updateUser(@PathVariable int staffNo,@RequestBody User userDetails) {
        User updateUser = userRepository.findById(staffNo).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        updateUser.setStaffId(userDetails.getStaffId());
        updateUser.setName(userDetails.getName());
        updateUser.setDepartment((userDetails.getDepartment()));
        updateUser.setContact(userDetails.getContact());
        updateUser.setEmail(userDetails.getEmail());
        updateUser.setStatus(userDetails.getStatus());
        updateUser.setType(userDetails.getType());
        userRepository.save(updateUser);
        return ResponseEntity.ok(updateUser);
    }

    //delete user REST API
    @DeleteMapping("{staffNo}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable int staffNo){
        User user = userRepository.findById(staffNo).orElseThrow(() -> new ResourceNotFoundException("User not found"));

        userRepository.delete(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
