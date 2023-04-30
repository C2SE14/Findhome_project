package dtu.capstone_2.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageModel {

    private Long id;

    private String image;

    private RealEstateModel realEstateModel;
}
