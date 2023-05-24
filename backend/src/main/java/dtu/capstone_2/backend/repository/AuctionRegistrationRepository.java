package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.controller.AuctionRegistrationController;
import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionRegistration;
import dtu.capstone_2.backend.entity.RealEstate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AuctionRegistrationRepository extends JpaRepository<AuctionRegistration, Long> {

    @Query("select a from AuctionRegistration a where a.user.id = :id")
    public List<AuctionRegistration> getAuctionRegistrationsByRegisterId(@Param("id") Long id);

    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete from AuctionRegistration where id = :id")
//    @Query(value = "delete from RealEstate r where r.businessType.id = 1")
    public void deleteAuctionRegistration(@Param("id") long id);


    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete from AuctionRegistration a where a.auction.id = :auctionId")
    public void deleteAuctionRegistrationByAuctionId(@Param("auctionId") long auctionId);
}
