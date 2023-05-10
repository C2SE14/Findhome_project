package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.BusinessType;
import dtu.capstone_2.backend.entity.RealEstate;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
public class TypeDetailModel {

    private Long id;

    private String typeDetailName;

    private BusinessTypeModel businessTypeModel;

    private List<RealEstateModel> realEstateModelList;
}
