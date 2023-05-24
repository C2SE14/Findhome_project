package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
public class AuctionResultModel {

    private Long id;

    private String reason;

    private boolean completeStatus;

    private String endTime;

    private Long userId;

    private Long auctionId;
}
