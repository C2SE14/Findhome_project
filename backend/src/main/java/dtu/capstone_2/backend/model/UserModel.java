package dtu.capstone_2.backend.model;


import dtu.capstone_2.backend.entity.Role;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
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

    private Date dateOfBirth;

    private String phoneNumber;

    private boolean gender;

    private String address;

    private String identityCard;

    private Date identityCardDate;

    private List<RealEstateModel> realEstateModelList; 
}
