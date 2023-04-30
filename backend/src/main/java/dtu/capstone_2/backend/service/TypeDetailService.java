package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.entity.*;
import dtu.capstone_2.backend.model.*;
import dtu.capstone_2.backend.repository.RealEstateRepository;
import dtu.capstone_2.backend.repository.TypeDetailRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TypeDetailService {

    @Autowired
    private TypeDetailRepository typeDetailRepository;

    @Autowired
    private RealEstateRepository realEstateRepository;

    public List<RealEstateModel> getRealEstateByTypeDetailId(Long id) {

        List<RealEstate> realEstateList = typeDetailRepository.getReferenceById(id).getRealEstate();

        ModelMapper modelMapper = new ModelMapper();
        List<RealEstateModel> realEstateModelList = new ArrayList<>();

        for (RealEstate item : realEstateList) {

            User user = realEstateRepository.getReferenceById(item.getId()).getUser();
            UserModel userModel = modelMapper.map(user, UserModel.class);

            BusinessType businessType = realEstateRepository.getReferenceById(item.getId()).getBusinessType();
            BusinessTypeModel businessTypeModel = modelMapper.map(businessType, BusinessTypeModel.class);

            TypeDetail typeDetail = realEstateRepository.getReferenceById(item.getId()).getTypeDetail();
            TypeDetailModel typeDetailModel = modelMapper.map(typeDetail, TypeDetailModel.class);

            List<ImageModel> imageModelList = new ArrayList<>();
            List<Image> imageList = realEstateRepository.findRealEstateById(item.getId()).getImageList();
            for (Image imageItem : imageList) {
                ImageModel imageModelItem = modelMapper.map(imageItem, ImageModel.class);
                imageModelList.add(imageModelItem);
            }

            RealEstateModel realEstateModel = modelMapper.map(item, RealEstateModel.class);

            realEstateModel.setUserModel(userModel);
            realEstateModel.setBusinessTypeModel(businessTypeModel);
            realEstateModel.setTypeDetailModel(typeDetailModel);
            realEstateModel.setImageModelList(imageModelList);

            realEstateModelList.add(realEstateModel);
        }
        return realEstateModelList;
    }
}
