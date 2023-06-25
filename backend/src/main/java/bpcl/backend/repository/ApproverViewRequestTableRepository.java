package bpcl.backend.repository;

import bpcl.backend.model.ApproverViewRequestTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApproverViewRequestTableRepository extends JpaRepository<ApproverViewRequestTable,String> {
    //all crud database methods
}
