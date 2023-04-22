package dtu.capstone_2.backend.model;


import dtu.capstone_2.backend.entity.RealEstate;
import dtu.capstone_2.backend.entity.Role;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Setter
@Getter
public class UserModel {

    private Long id;

    private String username;

    private String email;

    private String password;

    private Set<Role> roles = new HashSet<>();

    private String fullName;

    private Date date_of_birth;

    private String phoneNumber;

    private String cccd;

    private Date date_rage_cccd;

    private String issuedBy;

    private String permanent_residence;

    private String front_side_photo_CCCD;

    private String back_side_photo_CCCD;

    private List<RealEstateModel> realEstateModels;
}
