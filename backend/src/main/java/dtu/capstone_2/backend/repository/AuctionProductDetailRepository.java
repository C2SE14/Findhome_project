package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.AuctionProductDetails;
import dtu.capstone_2.backend.entity.RealEstate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AuctionProductDetailRepository extends JpaRepository<AuctionProductDetails, Long> {

    @Query("select a from AuctionProductDetails a where a.auction.id = :id")
    public AuctionProductDetails findAuctionProductDetailsByAuctionId(@Param("id") Long id);
}
