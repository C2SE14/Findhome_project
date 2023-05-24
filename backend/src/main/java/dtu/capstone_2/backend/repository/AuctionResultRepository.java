package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.AuctionResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface AuctionResultRepository extends JpaRepository<AuctionResult, Long> {

}
