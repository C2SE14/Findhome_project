package dtu.capstone_2.backend.model;


import dtu.capstone_2.backend.entity.AuctionRegistration;
import dtu.capstone_2.backend.entity.AuctionRoom;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Lob;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class AuctionModel {

    private Long id;

    private String dateOfPublication;

    private String registrationDateStart;

    private String registrationDateEnd;

    private String auctionStartDate;

    private String auctionEndDate;

    private String auctionParticipationProfile;

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

    private boolean browseByAdmin;

    private List<ImageModel> imageModelList;

    private UserModel userModel;

    private List<AuctionRegistrationModel> auctionRegistrationModels;

    private List<AuctionRoomModel> auctionRoomModels;
}
