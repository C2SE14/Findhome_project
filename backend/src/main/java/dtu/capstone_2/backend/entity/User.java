package dtu.capstone_2.backend.entity;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(	name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();


    private String fullName;

    @Column(name = "date_of_birth")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date_of_birth;

    private String phoneNumber;

    private String cccd;

    private Date date_rage_cccd;

    private String issuedBy;

    private String permanent_residence;

    private String front_side_photo_CCCD;

    private String back_side_photo_CCCD;


    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<RealEstate> realEstates;


    public List<RealEstate> getRealEstates() {
        return realEstates;
    }

    public void setRealEstates(List<RealEstate> realEstates) {
        this.realEstates = realEstates;
    }

    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }


    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Date getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCccd() {
        return cccd;
    }

    public void setCccd(String cccd) {
        this.cccd = cccd;
    }

    public Date getDate_rage_cccd() {
        return date_rage_cccd;
    }

    public void setDate_rage_cccd(Date date_rage_cccd) {
        this.date_rage_cccd = date_rage_cccd;
    }

    public String getIssuedBy() {
        return issuedBy;
    }

    public void setIssuedBy(String issuedBy) {
        this.issuedBy = issuedBy;
    }

    public String getPermanent_residence() {
        return permanent_residence;
    }

    public void setPermanent_residence(String permanent_residence) {
        this.permanent_residence = permanent_residence;
    }

    public String getFront_side_photo_CCCD() {
        return front_side_photo_CCCD;
    }

    public void setFront_side_photo_CCCD(String front_side_photo_CCCD) {
        this.front_side_photo_CCCD = front_side_photo_CCCD;
    }

    public String getBack_side_photo_CCCD() {
        return back_side_photo_CCCD;
    }

    public void setBack_side_photo_CCCD(String back_side_photo_CCCD) {
        this.back_side_photo_CCCD = back_side_photo_CCCD;
    }

    public User(Long id) {
        this.id = id;
    }

    public User(Long id, String username, String email, String password, Set<Role> roles, String fullName, Date date_of_birth, String phoneNumber, String cccd, Date date_rage_cccd, String issuedBy, String permanent_residence, String front_side_photo_CCCD, String back_side_photo_CCCD, List<RealEstate> realEstates) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.fullName = fullName;
        this.date_of_birth = date_of_birth;
        this.phoneNumber = phoneNumber;
        this.cccd = cccd;
        this.date_rage_cccd = date_rage_cccd;
        this.issuedBy = issuedBy;
        this.permanent_residence = permanent_residence;
        this.front_side_photo_CCCD = front_side_photo_CCCD;
        this.back_side_photo_CCCD = back_side_photo_CCCD;
        this.realEstates = realEstates;
    }
}