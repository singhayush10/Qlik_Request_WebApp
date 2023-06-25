package bpcl.backend.controller;

import bpcl.backend.model.Profile;
import bpcl.backend.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/profiles")
public class ProfileController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping
    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    //build create profile REST API
    @PostMapping
    public Profile createProfile(@RequestBody Profile profile) {
        return profileRepository.save(profile);
    }


}
