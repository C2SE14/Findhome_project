package dtu.capstone_2.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RealEstateModel {

    private Long id;

    private String nameEstate;

    private String address;

    private String area;

    private float price;

    private float depositPrice;

    private  String payment;

    private int minRentalPeriod;

    private String title;

    private String description;

    private String video;

    private float salientFeatures;

    private float usableArea;

    private float streetHouse;

    private String balconyDirection;

    private int numberFloors;

    private int numberBedRooms;

    private int rentalFloorLocation;

    private int numberToilets;

    private String interior;

    private UserModel userModel;
}
