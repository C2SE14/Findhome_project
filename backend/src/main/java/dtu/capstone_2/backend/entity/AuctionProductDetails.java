package dtu.capstone_2.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "auction_product_detail")
public class AuctionProductDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "auction_id", referencedColumnName = "id")
    private Auction auction;

}
