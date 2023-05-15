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
}
