package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.RealEstate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BrokerModel {


    private Long id;

    private boolean isBroker;

    private String name;

    private String email;

    private RealEstateModel realEstateModel;
}
