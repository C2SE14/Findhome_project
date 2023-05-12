package dtu.capstone_2.backend.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuickSearchEstateModel {

    private int businessTypeId;
    private int typeDetailId;
    private double minPrice;
    private double maxPrice;
    private double minSquare;
    private double maxSquare;
    private int typeSort;

}
