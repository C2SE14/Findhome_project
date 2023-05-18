package dtu.capstone_2.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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
    private String dateOfPublication;


    @Column(name = "registration_date_start")
    private String registrationDateStart;


    @Column(name = "registration_date_end")
    private String registrationDateEnd;

    @Column(name = "auction_start_date")
    private String auctionStartDate;

    @Column(name = "auction_end_date")
    private String auctionEndDate;

    private String auctionParticipationProfile;

    private Double startingPrice;

    private Double priceStep;

    @Column(name = "auction_participation_fee")
    private Double auctionParticipationFee;

    @Column(name = "down_payment")
    private String downPayment;

    @Lob
    private String nameRealEstate;

    @Lob
    private String cityProvince;

    @Lob
    private String district;

    @Lob
    private String wards;

    @Lob
    private String street;

    @Lob
    private String address;

    private float area;

    @Lob
    private String description;

    private String video;

    private String salientFeatures;

    private float usableArea;

    private float streetHouse;

    private String balconyDirection;

    private int numberFloors;

    private int numberBedRooms;

    private int rentalFloorLocation;

    private int numberToilets;

    @Lob
    private String legalDocument;

    @Lob
    private String interior;

    private String directionOfHouse;

    private String frontispiece;

    private String depth;

    @OneToMany(mappedBy = "auction", fetch = FetchType.LAZY)
    private List<Image> imageList;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @OneToMany(mappedBy = "auction", fetch = FetchType.LAZY)
    private List<AuctionRegistration> auctionRegistrationList;


}
