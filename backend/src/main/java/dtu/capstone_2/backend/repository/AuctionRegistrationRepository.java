package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.controller.AuctionRegistrationController;
import dtu.capstone_2.backend.entity.AuctionRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuctionRegistrationRepository extends JpaRepository<AuctionRegistration, Long> {

}
