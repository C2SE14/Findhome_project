package dtu.capstone_2.backend.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class RealEstateModel {

    private Long id;

    private String nameEstate;

    private String cityProvince;

    private String district;

    private String wards;

    private String street;

    private String address;

    private float area;

    private Double price;

    private Double depositPrice;

    private  String payment;

    private int minRentalPeriod;

    private String title;

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

    private Double rentCost;

    private String legalDocument;

    private String interior;

    private String directionOfHouse;

    private String frontispiece;

    private String depth;

    private Date postDate;

    private Date expirationDate;

    private boolean negotiablePrice;

    private UserModel userModel;

    private BusinessTypeModel businessTypeModel;

    private TypeDetailModel typeDetailModel;

    private List<ImageModel> imageModelList;

}
