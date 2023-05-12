package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.Auction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface AuctionRepository extends JpaRepository<Auction, Long> {
}
