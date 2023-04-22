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

    private String province;

    private String district;

    private String commune;

    private float price;

    private  String house_direction;

    private String area;

    private String legalStatus; // lưu mục dẫn đến thư mục chư

    private float negotiablePrice;

    private boolean post_status;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private User user;
}
