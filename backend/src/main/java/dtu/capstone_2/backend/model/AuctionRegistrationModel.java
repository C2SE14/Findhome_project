package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
public class AuctionRegistrationModel {


    private Long id;

    private boolean payFees;

    private boolean checkFace;

    private UserModel userModel;

    private AuctionModel auctionModel;
}
