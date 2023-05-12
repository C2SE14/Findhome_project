package dtu.capstone_2.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EstateSearchModel {

    private int businessTypeId;
    private int typeDetailId;
    private String district;
    private double minPrice;
    private double maxPrice;
    private double minSquare;
    private double maxSquare;
    private String keySearch;
    private int typeSort;
}
