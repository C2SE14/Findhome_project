package dtu.capstone_2.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "auction")
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_of_publication")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date dateOfPublication;


    @Column(name = "registration_date_start")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date registrationDateStart;


    @Column(name = "registration_date_end")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date registrationDateEnd;

    @Column(name = "auction_start_date")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date auctionStartDate;

    @Column(name = "auction_end_date")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date auctionEndDate;

    private Double startingPrice;

    private Double priceStep;

    @Column(name = "auction_participation_fee")
    private Double auctionParticipationFee;

    @Column(name = "down_payment")
    private String downPayment;

    @OneToOne(mappedBy = "auction")
    private AuctionProductDetails auctionProductDetails;
}
