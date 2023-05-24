package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRoomRepository extends JpaRepository<AuctionRoom, Long> {

    @Query(value = "SELECT * FROM find_home.auction_room\n" +
            "where auction_id = :id", nativeQuery = true)
    public List<AuctionRoom> getAuctionRoomByAuctionId(@Param("id") Long id);
}
