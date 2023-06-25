package bpcl.backend.repository;

import bpcl.backend.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request,String> {
    //all crud database methods
}
