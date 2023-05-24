package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.controller.AuctionRegistrationController;
import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionRegistration;
import dtu.capstone_2.backend.entity.Image;
import dtu.capstone_2.backend.entity.User;
import dtu.capstone_2.backend.model.*;
import dtu.capstone_2.backend.repository.AuctionRegistrationRepository;
import dtu.capstone_2.backend.repository.ImageRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionRegistrationService {

    @Autowired
    private AuctionRegistrationRepository auctionRegistrationRepository;

    @Autowired
    private ImageRepository imageRepository;

    public String addAuctionRegistration(AuctionRegistrationModel auctionRegistrationModel){
        ModelMapper modelMapper = new ModelMapper();

        AuctionRegistration auctionRegistration = modelMapper.map(auctionRegistrationModel, AuctionRegistration.class);
        auctionRegistration.setPayFees(false);
        auctionRegistration.setCheckFace(false);
        auctionRegistration.setAcceptTerms(false);
        User user = modelMapper.map(auctionRegistrationModel.getUserModel(), User.class);
        auctionRegistration.setUser(user);

        auctionRegistrationRepository.save(auctionRegistration);
        return "save success";
    }



    public String updateAuctionRegistration(AuctionRegistrationModel auctionRegistrationModel){
        ModelMapper modelMapper = new ModelMapper();

        AuctionRegistration auctionRegistration = modelMapper.map(auctionRegistrationModel, AuctionRegistration.class);
        auctionRegistration.setPayFees(auctionRegistration.isPayFees());
        auctionRegistration.setCheckFace(auctionRegistration.isCheckFace());
        auctionRegistration.setAcceptTerms(auctionRegistrationModel.isAcceptTerms());

        User user = modelMapper.map(auctionRegistrationModel.getUserModel(), User.class);
        auctionRegistration.setUser(user);

        auctionRegistrationRepository.save(auctionRegistration);
        return "update success";
    }

    public List<AuctionRegistrationModel> getAuctionRegistrationsByRegisterId(Long id){
        List<AuctionRegistration> auctionRegistrationList = auctionRegistrationRepository.getAuctionRegistrationsByRegisterId(id);

        ModelMapper modelMapper = new ModelMapper();

        List<AuctionRegistrationModel> auctionRegistrationModelList = new ArrayList<>();

        for(AuctionRegistration auctionRegistrationItem: auctionRegistrationList){

            AuctionRegistrationModel auctionRegistrationModel = null;
            auctionRegistrationModel = modelMapper.map(auctionRegistrationItem, AuctionRegistrationModel.class);

            AuctionModel auctionModel = (modelMapper.map(auctionRegistrationItem.getAuction(), AuctionModel.class));

            //            ---------------------
            List<ImageModel> imageModelList = new ArrayList<>();
            List<Image> imageList = imageRepository.getImageByAuctionId(auctionModel.getId());
            if (imageList != null) {
                for (Image imageItem: imageList){
                    ImageModel imageModel = modelMapper.map(imageItem, ImageModel.class);
                    imageModelList.add(imageModel);
                }
            }else{
                auctionModel.setImageModelList(null);
            }


            //            ---------------------

            auctionModel.setImageModelList(imageModelList);

            auctionRegistrationModel.setAuctionModel(auctionModel);
            //đẩy danh sách ảnh vào đây

            auctionRegistrationModelList.add(auctionRegistrationModel);

        }
        return auctionRegistrationModelList;
    }

    public List<AuctionRegistrationModel> getAllAuctionRegistrationsForAdmin(){
        List<AuctionRegistration> auctionRegistrationList = auctionRegistrationRepository.findAll();

        ModelMapper modelMapper = new ModelMapper();

        List<AuctionRegistrationModel> auctionRegistrationModelList = new ArrayList<>();

        for(AuctionRegistration auctionRegistrationItem: auctionRegistrationList){

            AuctionRegistrationModel auctionRegistrationModel = null;


            auctionRegistrationModel = modelMapper.map(auctionRegistrationItem, AuctionRegistrationModel.class);
            auctionRegistrationModel.setUserModel(modelMapper.map(auctionRegistrationItem.getUser(), UserModel.class));

            AuctionModel auctionModel = (modelMapper.map(auctionRegistrationItem.getAuction(), AuctionModel.class));

            //            ---------------------
            List<ImageModel> imageModelList = new ArrayList<>();
            List<Image> imageList = imageRepository.getImageByAuctionId(auctionModel.getId());
            if (imageList != null) {
                for (Image imageItem: imageList){
                    ImageModel imageModel = modelMapper.map(imageItem, ImageModel.class);
                    imageModelList.add(imageModel);
                }
            }else{
                auctionModel.setImageModelList(null);
            }


            //            ---------------------

            auctionModel.setImageModelList(imageModelList);

            auctionRegistrationModel.setAuctionModel(auctionModel);
            //đẩy danh sách ảnh vào đây

            auctionRegistrationModelList.add(auctionRegistrationModel);

        }
        return auctionRegistrationModelList;
    }

    public String deleteRegistrationsById(Long id){
        auctionRegistrationRepository.deleteAuctionRegistration(id);
        return  "delete success";
    }
}
