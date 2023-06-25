package bpcl.backend.repository;

import bpcl.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    //all crud database methods
}
