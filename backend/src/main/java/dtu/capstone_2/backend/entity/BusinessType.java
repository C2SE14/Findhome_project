package dtu.capstone_2.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "business_type")
public class BusinessType {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String typeName;

    @OneToMany(mappedBy = "businessType", fetch = FetchType.LAZY)
    private List<TypeDetail> typeDetailList;

    @OneToMany(mappedBy = "businessType", fetch = FetchType.LAZY)
    private List<RealEstate> realEstateList;
}
