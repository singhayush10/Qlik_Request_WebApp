package bpcl.backend.repository;

import bpcl.backend.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProfileRepository extends JpaRepository<Profile,Integer> {

    //all crud database methods

}
