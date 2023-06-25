package bpcl.backend.controller;

import bpcl.backend.exception.ResourceNotFoundException;
import bpcl.backend.model.ApproverViewRequestTable;
import bpcl.backend.repository.ApproverViewRequestTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/approverViewRequestTable")
public class ApproverViewRequestTableController {

    @Autowired
    private ApproverViewRequestTableRepository approverViewRequestTableRepository;

    @GetMapping
    public List<ApproverViewRequestTable> getApproverViewRequestTable() {
        return approverViewRequestTableRepository.findAll();
    }

    @PostMapping
    public ApproverViewRequestTable createApproverViewRequestTable(@RequestBody ApproverViewRequestTable approverViewRequestTable) {
        return approverViewRequestTableRepository.save(approverViewRequestTable);

    }

    @GetMapping("{applicationName}")
    public ResponseEntity<ApproverViewRequestTable> getApproverViewRequestRequestById(@PathVariable String applicationName) {
        ApproverViewRequestTable approverViewRequestTableRequest = approverViewRequestTableRepository.findById(applicationName).orElseThrow(() -> new ResourceNotFoundException("Request not found"));
        return ResponseEntity.ok(approverViewRequestTableRequest);

    }




}
