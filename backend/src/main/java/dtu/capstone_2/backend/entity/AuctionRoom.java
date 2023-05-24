package dtu.capstone_2.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "auction_room")
public class AuctionRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double pricePaid;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String paymentTime;

    private String randomName;

    @ManyToOne
    @JoinColumn(name = "auction_id")
    private Auction auction;
}
