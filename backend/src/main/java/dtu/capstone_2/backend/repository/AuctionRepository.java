package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.Auction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

public interface AuctionRepository extends JpaRepository<Auction, Long> {

    @Query(value = "SELECT * FROM auction\n" +
            "inner join auction_registration on auction.id = auction_registration.auction_id\n" +
            "where auction_registration.user_id =  :id", nativeQuery = true)
    public List<Auction> getAuctionByRegisterId(@Param("id") Long id);

    @Query(value = "SELECT * FROM auction\n" +
            "where auction.user_id = :id", nativeQuery = true)
    public List<Auction> getAuctionPostOfUser(@Param("id") Long id);

    @Query(value = "SELECT DISTINCT auction.id, auction.date_of_publication, auction.registration_date_start,  auction.user_id, auction.auction_participation_fee, auction.registration_date_end, auction.auction_start_date, auction.auction_end_date, auction.starting_price, auction.price_step ,auction_participation_profile, auction.down_payment, auction.name_real_estate, auction.city_province, auction.district, auction.wards, auction.street, auction.address, auction.area, auction.description, auction.video, auction.salient_features, auction.usable_area, auction.street_house, auction.balcony_direction, auction.number_floors, auction.number_bed_rooms, auction.rental_floor_location, auction.number_toilets, auction.legal_document, auction.interior,  direction_of_house, auction.frontispiece, auction.depth, auction.browse_by_admin FROM find_home.auction_registration\n" +
            "inner join auction on auction.id = auction_registration.auction_id\n" +
            "where auction_registration.user_id = :id", nativeQuery = true)
    public List<Auction> unpaidUserAuctionRegistration(@Param("id") Long id);

    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete from Auction a where a.id = :auctionId and a.user.id = :userId")
    public void deleteAuctionOfUser(@Param("auctionId") long auctionId, @Param("userId") long userId);

    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete from Auction a where a.id = :auctionId")
    public void deleteAuction(@Param("auctionId") long auctionId);
}
