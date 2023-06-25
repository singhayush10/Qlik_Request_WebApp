package bpcl.backend.controller;

import bpcl.backend.exception.ResourceNotFoundException;
import bpcl.backend.model.ViewRequestTable;
import bpcl.backend.repository.ViewRequestTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.View;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/viewRequestTable")
public class ViewRequestTableController {

    @Autowired
    private ViewRequestTableRepository viewRequestTableRepository;

    @GetMapping
    public List<ViewRequestTable> getViewRequestTable() {
        return viewRequestTableRepository.findAll();
    }

    //create viewRequestTable REST API
    @PostMapping
    public ViewRequestTable createViewRequestTable(@RequestBody ViewRequestTable viewRequestTable) {
        return viewRequestTableRepository.save(viewRequestTable);
    }

    // get request in ViewRequestTable REST API
    @GetMapping({"applicationName"})
    public ResponseEntity<ViewRequestTable> getViewRequestTableRequestById(@PathVariable String applicationName) {
        ViewRequestTable viewRequestTableRequest = viewRequestTableRepository.findById(applicationName).orElseThrow(() -> new ResourceNotFoundException("Request not found"));
        return ResponseEntity.ok(viewRequestTableRequest);
    }

    @PutMapping({"applicationName"})
    public ResponseEntity<ViewRequestTable> updateViewRequestTable(@PathVariable String applicationName,@RequestBody ViewRequestTable viewRequestTableRequestDetails) {
        ViewRequestTable updateViewRequestTableRequest = viewRequestTableRepository.findById(applicationName).orElseThrow(() -> new ResourceNotFoundException("Request not found"));
        updateViewRequestTableRequest.setSent(viewRequestTableRequestDetails.getSent());
        viewRequestTableRepository.save(updateViewRequestTableRequest);
        return ResponseEntity.ok(updateViewRequestTableRequest);
    }


}
