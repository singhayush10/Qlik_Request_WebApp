package bpcl.backend.repository;

import bpcl.backend.model.ViewRequestTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ViewRequestTableRepository extends JpaRepository<ViewRequestTable,String> {
    //all crud database methods
}
