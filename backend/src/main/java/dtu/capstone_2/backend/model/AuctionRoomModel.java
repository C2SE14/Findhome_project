package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
public class AuctionRoomModel {

    private Long id;

    private Double pricePaid;

    private String paymentTime;

    private String randomName;

    private UserModel userModel;

    private AuctionModel auctionModel;
}
