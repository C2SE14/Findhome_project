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
@Table(name = "broker")
public class Broker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean isBroker;

    private String name;

    private String email;

    @OneToOne(mappedBy = "broker")
    private RealEstate realEstate;
}
