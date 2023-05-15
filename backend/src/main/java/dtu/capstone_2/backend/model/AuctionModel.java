package dtu.capstone_2.backend.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Lob;
import java.util.Date;
import java.util.List;

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

    private String nameRealEstate;

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

    private List<ImageModel> imageModelList;
}
