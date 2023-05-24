package dtu.capstone_2.backend.service;


import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionRegistration;
import dtu.capstone_2.backend.entity.Image;
import dtu.capstone_2.backend.entity.User;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.AuctionRegistrationModel;
import dtu.capstone_2.backend.model.ImageModel;
import dtu.capstone_2.backend.model.UserModel;
import dtu.capstone_2.backend.repository.AuctionRegistrationRepository;
import dtu.capstone_2.backend.repository.AuctionRepository;
import dtu.capstone_2.backend.repository.ImageRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private AuctionRegistrationRepository auctionRegistrationRepository;

    public String addAuction(AuctionModel auctionModel){
        ModelMapper modelMapper = new ModelMapper();

        Auction auction = new Auction();

        auction.setDateOfPublication(auctionModel.getDateOfPublication());
        auction.setRegistrationDateStart(auctionModel.getRegistrationDateStart());
        auction.setRegistrationDateEnd(auctionModel.getRegistrationDateEnd());
        auction.setAuctionStartDate(auctionModel.getAuctionStartDate());
        auction.setAuctionEndDate(auctionModel.getAuctionEndDate());
        auction.setAuctionParticipationProfile(auctionModel.getAuctionParticipationProfile());
        auction.setStartingPrice(auctionModel.getStartingPrice());
        auction.setPriceStep(auctionModel.getPriceStep());
        auction.setAuctionParticipationFee(auctionModel.getAuctionParticipationFee());
        auction.setDownPayment(auctionModel.getDownPayment());
        auction.setNameRealEstate(auctionModel.getNameRealEstate());
        auction.setCityProvince(auctionModel.getCityProvince());
        auction.setDistrict(auctionModel.getDistrict());
        auction.setWards(auctionModel.getWards());
        auction.setStreet(auctionModel.getStreet());
        auction.setAddress(auctionModel.getAddress());
        auction.setArea(auctionModel.getArea());
        auction.setDescription(auctionModel.getDescription());
        auction.setVideo(auctionModel.getVideo());
        auction.setSalientFeatures(auctionModel.getSalientFeatures());
        auction.setUsableArea(auctionModel.getUsableArea());
        auction.setStreetHouse(auctionModel.getStreetHouse());
        auction.setBalconyDirection(auctionModel.getBalconyDirection());
        auction.setNumberFloors(auctionModel.getNumberFloors());
        auction.setNumberBedRooms(auctionModel.getNumberBedRooms());
        auction.setRentalFloorLocation(auctionModel.getRentalFloorLocation());
        auction.setNumberToilets(auctionModel.getNumberToilets());
        auction.setLegalDocument(auctionModel.getLegalDocument());
        auction.setInterior(auctionModel.getInterior());
        auction.setDirectionOfHouse(auctionModel.getDirectionOfHouse());
        auction.setFrontispiece(auctionModel.getFrontispiece());
        auction.setDepth(auctionModel.getDepth());
        auction.setBrowseByAdmin(false);

        User user = modelMapper.map(auctionModel.getUserModel(), User.class);
        auction.setUser(user);

        auctionRepository.save(auction);

        for(ImageModel imageModelItem: auctionModel.getImageModelList()){
            imageRepository.insertImageOfAction(imageModelItem.getImage(), auction.getId() );
        }
        return "Add success";

    }

    public List<AuctionModel> getAllAuctionModel(){
        ModelMapper modelMapper = new ModelMapper();
        List<Auction> auctionList = auctionRepository.findAll();
        List<AuctionModel> auctionModelList = new ArrayList<>();

        for(Auction auction: auctionList){
            AuctionModel auctionModel = new AuctionModel();
            List<ImageModel> imageModelList = new ArrayList<>();

            auctionModel = modelMapper.map(auction, AuctionModel.class);
            auctionModel.setUserModel(modelMapper.map(auction.getUser(), UserModel.class));

            for(Image imageItem: auction.getImageList()){
                imageModelList.add(modelMapper.map(imageItem, ImageModel.class));
            }
            auctionModel.setImageModelList(imageModelList);
            auctionModelList.add(auctionModel);
        }
        return auctionModelList;
    }

    public AuctionModel getAuctionById(Long id){
        ModelMapper modelMapper = new ModelMapper();
        Auction auction = auctionRepository.getById(id);

            List<ImageModel> imageModelList = new ArrayList<>();

            AuctionModel auctionModel = modelMapper.map(auction, AuctionModel.class);

            for(Image imageItem: auction.getImageList()){
                imageModelList.add(modelMapper.map(imageItem, ImageModel.class));
            }
            auctionModel.setUserModel(modelMapper.map(auction.getUser(), UserModel.class));
            auctionModel.setImageModelList(imageModelList);

            List<AuctionRegistrationModel> auctionRegistrationModelList = new ArrayList<>();
            for(AuctionRegistration auctionRegistrationItem: auction.getAuctionRegistrationList()){
                AuctionRegistrationModel auctionRegistrationModel = modelMapper.map(auctionRegistrationItem, AuctionRegistrationModel.class);
                UserModel userModel = modelMapper.map(auctionRegistrationItem.getUser(), UserModel.class);
                auctionRegistrationModel.setUserModel(userModel);
                if(auctionRegistrationModel.isPayFees() == true){
                    auctionRegistrationModelList.add(auctionRegistrationModel);
                }
            }
            auctionModel.setAuctionRegistrationModels(auctionRegistrationModelList);

        return auctionModel;
    }

        public List<AuctionModel> getAuctionByRegisterId(Long id){
            ModelMapper modelMapper = new ModelMapper();
            List<Auction> auctionList = auctionRepository.getAuctionByRegisterId(id);
            List<AuctionModel> auctionModelList = new ArrayList<>();

            for(Auction auction: auctionList){
                AuctionModel auctionModel = new AuctionModel();
                List<ImageModel> imageModelList = new ArrayList<>();

                auctionModel = modelMapper.map(auction, AuctionModel.class);

                for(Image imageItem: auction.getImageList()){
                    imageModelList.add(modelMapper.map(imageItem, ImageModel.class));
                }
                auctionModel.setImageModelList(imageModelList);
                auctionModelList.add(auctionModel);
            }
            return auctionModelList;
        }

    public List<AuctionModel> getAuctionPostOfUser(Long id){
        ModelMapper modelMapper = new ModelMapper();
        List<Auction> auctionList = auctionRepository.getAuctionPostOfUser(id);
        List<AuctionModel> auctionModelList = new ArrayList<>();

        for(Auction auction: auctionList){
            AuctionModel auctionModel = new AuctionModel();
            List<ImageModel> imageModelList = new ArrayList<>();

            auctionModel = modelMapper.map(auction, AuctionModel.class);

            for(Image imageItem: auction.getImageList()){
                imageModelList.add(modelMapper.map(imageItem, ImageModel.class));
            }
            auctionModel.setImageModelList(imageModelList);
            auctionModelList.add(auctionModel);
        }
        return auctionModelList;
    }

    public List<AuctionModel> unpaidUserAuctionRegistration(Long  id){

        List<Auction>  auctionList = auctionRepository.unpaidUserAuctionRegistration(id);

        List<AuctionModel> auctionModelList = new ArrayList<>();

        ModelMapper modelMapper = new ModelMapper();

        for(Auction auctionItem: auctionList){
            auctionModelList.add(modelMapper.map(auctionItem, AuctionModel.class));
        }

        return auctionModelList;
    }

    public String browseAuctionPost(Long id){
        Auction auction = auctionRepository.getById(id);
        auction.setBrowseByAdmin(true);
        auctionRepository.save(auction);
        return "success browsing";
    }

    public String updateAuction(AuctionModel auctionModel) throws ParseException {
        ModelMapper modelMapper = new ModelMapper();

        Auction auction = auctionRepository.getById(auctionModel.getId());
        auction.setDateOfPublication(auctionModel.getDateOfPublication());
        auction.setRegistrationDateStart(auctionModel.getRegistrationDateStart());
        auction.setRegistrationDateEnd(auctionModel.getRegistrationDateEnd());
        auction.setAuctionStartDate(auctionModel.getAuctionStartDate());
        auction.setAuctionEndDate(auctionModel.getAuctionEndDate());
        auction.setAuctionParticipationProfile(auctionModel.getAuctionParticipationProfile());
        auction.setStartingPrice(auctionModel.getStartingPrice());
        auction.setPriceStep(auctionModel.getPriceStep());
        auction.setAuctionParticipationFee(auctionModel.getAuctionParticipationFee());
        auction.setDownPayment(auctionModel.getDownPayment());
        auction.setNameRealEstate(auctionModel.getNameRealEstate());
        auction.setCityProvince(auctionModel.getCityProvince());
        auction.setDistrict(auctionModel.getDistrict());
        auction.setWards(auctionModel.getWards());
        auction.setStreet(auctionModel.getStreet());
        auction.setAddress(auctionModel.getAddress());
        auction.setArea(auctionModel.getArea());
        auction.setDescription(auctionModel.getDescription());
        auction.setVideo(auctionModel.getVideo());
        auction.setSalientFeatures(auctionModel.getSalientFeatures());
        auction.setUsableArea(auctionModel.getUsableArea());
        auction.setStreetHouse(auctionModel.getStreetHouse());
        auction.setBalconyDirection(auctionModel.getBalconyDirection());
        auction.setNumberFloors(auctionModel.getNumberFloors());
        auction.setNumberBedRooms(auctionModel.getNumberBedRooms());
        auction.setRentalFloorLocation(auctionModel.getRentalFloorLocation());
        auction.setNumberToilets(auctionModel.getNumberToilets());
        auction.setLegalDocument(auctionModel.getLegalDocument());
        auction.setInterior(auctionModel.getInterior());
        auction.setDirectionOfHouse(auctionModel.getDirectionOfHouse());
        auction.setFrontispiece(auctionModel.getFrontispiece());
        auction.setDepth(auctionModel.getDepth());
        auction.setBrowseByAdmin(auctionModel.isBrowseByAdmin());
        auctionRepository.save(auction);

        imageRepository.deleteImageByAuctionId(auctionModel.getId());
        for(ImageModel imageModelItem: auctionModel.getImageModelList()){
            imageRepository.insertImageOfAction(imageModelItem.getImage(), auction.getId() );
        }
        return "update success";

    }

    public String deleteAuctionOfOwner(Long auctionId, Long userId){
        imageRepository.deleteImageByAuctionId(auctionId);
        auctionRepository.deleteAuctionOfUser(auctionId, userId);
        return "delete success";
    }

    public String deleteAuctionById(Long id){
        imageRepository.deleteImageByAuctionId(id);
        auctionRegistrationRepository.deleteAuctionRegistrationByAuctionId(id);
        auctionRepository.deleteAuction(id);
        return "delete success";
    }
}
