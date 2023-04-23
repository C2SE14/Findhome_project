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
@Table(name = "real_estate")
public class RealEstate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
