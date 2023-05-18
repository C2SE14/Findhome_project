package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.entity.*;
import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.*;
import dtu.capstone_2.backend.repository.BusinessTypeRepository;
import dtu.capstone_2.backend.repository.RealEstateRepository;
import dtu.capstone_2.backend.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RealEstateRepository realEstateRepository;

    @Autowired
    PasswordEncoder encoder;

    public List<RealEstateModel> getRealEstateByUserId(Long id) throws NullObjectExeption {

        ModelMapper modelMapper = new ModelMapper();
        List<RealEstate> realEstateList = userRepository.getReferenceById(id).getRealEstates();
        if (realEstateList == null) {
            throw new NullObjectExeption("realEstateList is null from getRealEstateByUserId()");
        }

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

    public UserModel getUserById(Long id) throws NullObjectExeption{
        ModelMapper modelMapper = new ModelMapper();
        User user = userRepository.findUserById(id);
        UserModel userModel = modelMapper.map(user, UserModel.class);
        return userModel;
    }

    public String updateUser(UserModel model){
        ModelMapper modelMapper = new ModelMapper();
        User user = userRepository.getById(model.getId());
        user.setUsername(model.getUsername());
        user.setEmail(model.getEmail());
//        user.setPassword( encoder.encode(model.getPassword())); // ->. mã hóa
        user.setRoles(model.getRoles());
        user.setFullName(model.getFullName());
        user.setDateOfBirth(model.getDateOfBirth());
        user.setPhoneNumber(model.getPhoneNumber());
        user.setGender(model.isGender());
        user.setAddress(model.getAddress());
        user.setIdentityCard(model.getIdentityCard());
        user.setIdentityCardDate(model.getIdentityCardDate());
        user.setFrontOfTheIdentityCard(model.getFrontOfTheIdentityCard());
        user.setBackOfTheIdentityCard(model.getBackOfTheIdentityCard());
        user.setAvatar(model.getAvatar());
        userRepository.save(user);
        return  "update success";
    }

    public List<UserModel> getAllUser(){
        List<User> userList =  userRepository.findAll();
        List<UserModel> userModelList = new ArrayList<>();
        ModelMapper modelMapper = new ModelMapper();

        for(User user: userList){
            userModelList.add(modelMapper.map(user, UserModel.class));
        }
        return  userModelList;
    }
}
