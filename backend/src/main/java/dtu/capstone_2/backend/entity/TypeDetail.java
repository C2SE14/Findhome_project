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
@Table(name = "type_detail")
public class TypeDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String typeDetailName;

    @ManyToOne
    @JoinColumn(name = "business_id")
    private BusinessType businessType;

    @OneToMany(mappedBy = "typeDetail", fetch = FetchType.LAZY)
    private List<RealEstate> realEstate;
}
