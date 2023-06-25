package bpcl.backend.controller;

import bpcl.backend.exception.ResourceNotFoundException;
import bpcl.backend.model.Request;
import bpcl.backend.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/requests")
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;

    @GetMapping
    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    //create request REST API
    @PostMapping
    public Request createRequest(@RequestBody Request request) {
        return requestRepository.save(request);
    }

    // get request by Application Name REST API
    @GetMapping("{applicationName}")
    public ResponseEntity<Request> getRequestById(@PathVariable String applicationName) {
        Request request = requestRepository.findById(applicationName).orElseThrow(() -> new ResourceNotFoundException("Request not found"));
        return ResponseEntity.ok(request);
    }

    // update request REST API
    @PutMapping("{applicationName}")
    public ResponseEntity<Request> updateRequest(@PathVariable String applicationName,@RequestBody Request requestDetails) {
        Request updateRequest = requestRepository.findById(applicationName).orElseThrow(() -> new ResourceNotFoundException("Request not found"));
        updateRequest.setEnvironment(requestDetails.getEnvironment());
        updateRequest.setApplicationName(requestDetails.getEnvironment());
        updateRequest.setRequestDescription((requestDetails.getRequestDescription()));
        updateRequest.setStream(requestDetails.getStream());
        updateRequest.setRefreshFrequency(requestDetails.getRefreshFrequency());

        requestRepository.save(updateRequest);
        return ResponseEntity.ok(updateRequest);
    }

    //delete request REST API
    @DeleteMapping("{applicationName}")
    public ResponseEntity<HttpStatus> deleteRequest(@PathVariable String applicationName) {
        Request deleteRequest = requestRepository.findById(applicationName).orElseThrow(() -> new ResourceNotFoundException("Request not found"));

        requestRepository.delete(deleteRequest);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
