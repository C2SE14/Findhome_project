package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.Auction;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AuctionProductDetailsModel {


    private Long id;

    private String cityProvince;

    private String district;

    private String wards;

    private String street;

    private String address;

    private float area;

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

    private String legalDocument;

    private String interior;

    private String directionOfHouse;

    private String frontispiece;

    private String depth;

    private AuctionModel auctionModel;
}
