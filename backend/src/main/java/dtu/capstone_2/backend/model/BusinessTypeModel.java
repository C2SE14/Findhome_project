package dtu.capstone_2.backend.model;

import dtu.capstone_2.backend.entity.TypeDetail;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

@Setter
@Getter
public class BusinessTypeModel {

    private Long id;

    private String typeName;

    private List<TypeDetailModel> typeDetailModels;

    private List<RealEstateModel> realEstateModelList;
}
