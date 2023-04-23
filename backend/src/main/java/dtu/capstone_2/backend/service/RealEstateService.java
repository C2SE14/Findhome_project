package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.entity.RealEstate;
import dtu.capstone_2.backend.entity.User;
import dtu.capstone_2.backend.model.RealEstateModel;
import dtu.capstone_2.backend.model.UserModel;
import dtu.capstone_2.backend.repository.RealEstateRepository;
import dtu.capstone_2.backend.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RealEstateService {

    @Autowired
    private RealEstateRepository realEstateRepository;

    @Autowired
    private UserRepository userRepository;

    public List<RealEstateModel> getAllRealEstate() {
        ModelMapper modelMapper = new ModelMapper();
        List<RealEstate> realEstateList =  realEstateRepository.findAll();
        List<RealEstateModel> realEstateModelList = new ArrayList<>();

        for(RealEstate item : realEstateList){

            User user = userRepository.getUserByRealEstateId(item.getId());
            UserModel userModel = modelMapper.map(user, UserModel.class);

            RealEstateModel realEstateModel = modelMapper.map(item, RealEstateModel.class);
            realEstateModel.setUserModel(userModel);
            realEstateModelList.add(realEstateModel);
        }
        return realEstateModelList;
    }

    public RealEstateModel getRealEstateById(Long id) {
        ModelMapper modelMapper = new ModelMapper();
        RealEstate realEstate =  realEstateRepository.findRealEstateById(id);

        User user = userRepository.getUserByRealEstateId(realEstate.getId());
        UserModel userModel = modelMapper.map(user, UserModel.class);

        RealEstateModel realEstateModel = modelMapper.map(realEstate, RealEstateModel.class);
        realEstateModel.setUserModel(userModel);

        return  realEstateModel;
    }
    public String addRealEstate(RealEstateModel realEstateModel){
//        ModelMapper modelMapper = new ModelMapper();
//        RealEstate realEstate = modelMapper.map(realEstateModel, RealEstate.class);
//        realEstate.setNameEstate(realEstateModel.getNameEstate());
//        realEstate.setProvince(realEstateModel.getProvince());
//        realEstate.setDistrict(realEstateModel.getDistrict());
//        realEstate.setCommune(realEstateModel.getCommune());
//        realEstate.setPrice(realEstateModel.getPrice());
//        realEstate.setHouse_direction(realEstateModel.getHouse_direction());
//        realEstate.setArea(realEstateModel.getArea());
//        realEstate.setLegalStatus(realEstateModel.getLegalStatus());
//        realEstate.setNegotiablePrice(realEstateModel.getNegotiablePrice());
//        realEstate.setPost_status(realEstate.isPost_status());
        return "Add success";
    }
}
