package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
public class RealEstateModel {

    private Long id;

    private String nameEstate;

    private String province;

    private String district;

    private String commune;

    private float price;

    private  String house_direction;

    private String area;

    private String legalStatus;

    private float negotiablePrice;

    private boolean post_status;

    private UserModel userModel;
}
