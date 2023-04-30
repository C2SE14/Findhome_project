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
@Table(name = "real_estate")
public class RealEstate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String nameEstate;

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

    private Double price;

    private Double depositPrice;

    private  String payment;

    private int minRentalPeriod;

    private String title;

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

    private Double rentCost;

    @Lob
    private String legalDocument;

    @Lob
    private String interior;

    private String directionOfHouse;

    private String frontispiece;

    private String depth;

    @Column(name = "post_date")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date postDate;

    @Column(name = "expiration_date")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date expirationDate;

    private boolean negotiablePrice;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "realEstate", fetch = FetchType.LAZY)
    private List<Image> imageList;

    @ManyToOne
    @JoinColumn(name = "type_detail_id")
    private TypeDetail typeDetail;

    @ManyToOne
    @JoinColumn(name = "business_type_id")
    private BusinessType businessType;
}
