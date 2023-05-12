package dtu.capstone_2.backend.model;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class AuctionModel {

    private Long id;

    private Date dateOfPublication;

    private Date registrationDateStart;

    private Date registrationDateEnd;

    private Date auctionStartDate;

    private Date auctionEndDate;

    private Double startingPrice;

    private Double priceStep;

    private Double auctionParticipationFee;

    private String downPayment;

    private AuctionProductDetailsModel auctionProductDetailsModel;
}
