package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.entity.*;
import dtu.capstone_2.backend.exception.NullObjectExeption;
import dtu.capstone_2.backend.model.*;
import dtu.capstone_2.backend.repository.ImageRepository;
import dtu.capstone_2.backend.repository.RealEstateRepository;
import dtu.capstone_2.backend.repository.TypeDetailRepository;
import dtu.capstone_2.backend.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.Normalizer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RealEstateService {

    @Autowired
    private RealEstateRepository realEstateRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private TypeDetailRepository typeDetailRepository;

    public List<RealEstateModel> getAllRealEstate() throws NullObjectExeption {
        ModelMapper modelMapper = new ModelMapper();
        List<RealEstate> realEstateList =  realEstateRepository.findAll();
        if(realEstateList == null){
            throw new NullObjectExeption("realEstateList is null from getAllRealEstate()");
        }

        List<RealEstateModel> realEstateModelList = new ArrayList<>();

        for(RealEstate item : realEstateList){

            User user = realEstateRepository.getReferenceById(item.getId()).getUser();
            UserModel userModel = modelMapper.map(user, UserModel.class);

            BusinessType businessType = realEstateRepository.getReferenceById(item.getId()).getBusinessType();
            BusinessTypeModel businessTypeModel = modelMapper.map(businessType, BusinessTypeModel.class);

            TypeDetail typeDetail = realEstateRepository.getReferenceById(item.getId()).getTypeDetail();
            TypeDetailModel typeDetailModel = modelMapper.map(typeDetail, TypeDetailModel.class);

            List<ImageModel> imageModelList = new ArrayList<>();
            List<Image> imageList = realEstateRepository.findRealEstateById(item.getId()).getImageList();
            for(Image imageItem: imageList){
                ImageModel imageModelItem =modelMapper.map(imageItem, ImageModel.class);
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

    public RealEstateModel getRealEstateById(Long id) throws NullObjectExeption {
        ModelMapper modelMapper = new ModelMapper();
        RealEstate realEstate =  realEstateRepository.findRealEstateById(id);
        RealEstateModel realEstateModel = modelMapper.map(realEstate, RealEstateModel.class);


        User user = realEstateRepository.getReferenceById(realEstate.getId()).getUser();
        if(user == null){
            throw new NullObjectExeption("User is null from getRealEstateById() -> realEstateRepository.getReferenceById(realEstate.getId()).getUser();");
        }else{
            UserModel userModel = modelMapper.map(user, UserModel.class);
            realEstateModel.setUserModel(userModel);
        }

        BusinessType businessType = realEstateRepository.getReferenceById(realEstate.getId()).getBusinessType();
        if(businessType == null){
            throw new NullObjectExeption("businessType is null from getRealEstateById() -> realEstateRepository.getReferenceById(realEstate.getId()).getBusinessType()");
        }else{
            BusinessTypeModel businessTypeModel = modelMapper.map(businessType, BusinessTypeModel.class);
            realEstateModel.setBusinessTypeModel(businessTypeModel);
        }


        TypeDetail typeDetail = realEstateRepository.getReferenceById(realEstate.getId()).getTypeDetail();
        if(typeDetail == null){
            throw new NullObjectExeption("typeDetail is null from getRealEstateById() -> realEstateRepository.getReferenceById(realEstate.getId()).getTypeDetail()");
        }else{
            TypeDetailModel typeDetailModel = modelMapper.map(typeDetail, TypeDetailModel.class);
            realEstateModel.setTypeDetailModel(typeDetailModel);
        }

        List<ImageModel> imageModelList = new ArrayList<>();
        List<Image> imageList = realEstateRepository.findRealEstateById(realEstate.getId()).getImageList();
        if(imageList == null){
            throw new NullObjectExeption("imageList is null from getRealEstateById() -> realEstateRepository.findRealEstateById(realEstate.getId()).getImageList()");
        }else{
            TypeDetailModel typeDetailModel = modelMapper.map(typeDetail, TypeDetailModel.class);
            realEstateModel.setTypeDetailModel(typeDetailModel);
        }
        for(Image imageItem: imageList){
            ImageModel imageModelItem =modelMapper.map(imageItem, ImageModel.class);
            imageModelList.add(imageModelItem);
        }
        realEstateModel.setImageModelList(imageModelList);

        Broker broker = realEstate.getBroker();
        if(broker == null){
            realEstateModel.setBrokerModel(null);
        }else{
            BrokerModel brokerModel = modelMapper.map(broker, BrokerModel.class);
            realEstateModel.setBrokerModel(brokerModel);
        }

        return  realEstateModel;
    }
    public String addRealEstate(RealEstateModel realEstateModel) throws ParseException {

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime now = LocalDateTime.now();

        String strDate = dtf.format(now);

        ModelMapper modelMapper = new ModelMapper();

        RealEstate realEstate = modelMapper.map(realEstateModel, RealEstate.class);
        realEstate.setPostDate(new SimpleDateFormat("yyyy-MM-dd").parse(strDate));
        realEstateRepository.save(realEstate);

        for(ImageModel imageModelItem: realEstateModel.getImageModelList()){
            imageRepository.insertImage(imageModelItem.getImage(), realEstate.getId() );
        }
        return "Add success";

    }

    public String updateRealEstate(RealEstateModel realEstateModel){

        ModelMapper modelMapper = new ModelMapper();

        RealEstate realEstate = realEstateRepository.findRealEstateById(realEstateModel.getId());

        realEstate.setNameEstate(realEstateModel.getNameEstate());
        realEstate.setCityProvince(realEstateModel.getCityProvince());
        realEstate.setDistrict(realEstateModel.getDistrict());
        realEstate.setWards(realEstateModel.getWards());
        realEstate.setAddress(realEstateModel.getAddress());
        realEstate.setArea(realEstateModel.getArea());
        realEstate.setPrice(realEstateModel.getPrice());
        realEstate.setDepositPrice(realEstateModel.getDepositPrice());
        realEstate.setPayment(realEstateModel.getPayment());
        realEstate.setMinRentalPeriod(realEstateModel.getMinRentalPeriod());
        realEstate.setTitle(realEstateModel.getTitle());
        realEstate.setDescription(realEstateModel.getDescription());
        realEstate.setVideo(realEstateModel.getVideo());
        realEstate.setSalientFeatures(realEstateModel.getSalientFeatures());
        realEstate.setUsableArea(realEstateModel.getUsableArea());
        realEstate.setStreetHouse(realEstateModel.getStreetHouse());
        realEstate.setBalconyDirection(realEstateModel.getBalconyDirection());
        realEstate.setNumberFloors(realEstateModel.getNumberFloors());
        realEstate.setNumberBedRooms(realEstateModel.getNumberBedRooms());
        realEstate.setRentalFloorLocation(realEstateModel.getRentalFloorLocation());
        realEstate.setNumberToilets(realEstateModel.getNumberToilets());
        realEstate.setRentCost(realEstateModel.getRentCost());
        realEstate.setLegalDocument(realEstateModel.getLegalDocument());
        realEstate.setInterior(realEstateModel.getInterior());
        realEstate.setDirectionOfHouse(realEstateModel.getDirectionOfHouse());
        realEstate.setFrontispiece(realEstateModel.getFrontispiece());
        realEstate.setDepth(realEstateModel.getDepth());
        realEstate.setPostDate(realEstateModel.getPostDate());
        realEstate.setExpirationDate(realEstateModel.getExpirationDate());
        realEstate.setNegotiablePrice(realEstateModel.isNegotiablePrice());


        realEstate.setBusinessType(modelMapper.map(realEstateModel.getBusinessTypeModel(), BusinessType.class));
        realEstate.setTypeDetail(modelMapper.map(realEstateModel.getTypeDetailModel(), TypeDetail.class));

        realEstateRepository.save(realEstate);

        imageRepository.deleteImageByRealEstateId(realEstate.getId());
        for(ImageModel imageModelItem: realEstateModel.getImageModelList()){
            imageRepository.insertImage(imageModelItem.getImage(), realEstate.getId() );
        }

        return "update success";
    }

    public  String deleteRealEstate(long id){
        imageRepository.deleteImageByRealEstateId(id);
        realEstateRepository.deleteRealEstate(id);
        return "delete success";
    }

    public  String deleteRealEstateOfUser(long realEstateId, long  userId){
        imageRepository.deleteImageByRealEstateId(realEstateId);
        realEstateRepository.deleteRealEstateOfUser(realEstateId, userId);
        return "delete success";
    }

    public List<RealEstateModel> searchData(EstateSearchModel model) throws NullPointerException {

        ModelMapper modelMapper = new ModelMapper();

        Pageable pageable;

        switch ( model.getTypeSort()) {
            case  -1:
                pageable = PageRequest.of(0, 1000, Sort.by("id").ascending());
                break;
            case  1:
                pageable = PageRequest.of(0, 1000, Sort.by("post_date").descending());
                break;
            case  2:
                pageable = PageRequest.of(0, 1000, Sort.by("price").ascending());
                break;
            case  3:
                pageable = PageRequest.of(0, 1000, Sort.by("price").descending());
                break;
            case  4:
                pageable = PageRequest.of(0, 1000, Sort.by("area").ascending());
                break;
            case  5:
                pageable = PageRequest.of(0, 1000, Sort.by("area").descending());
                break;
            default:
                pageable = PageRequest.of(0, 1000, Sort.by("id").descending());
        }

        List<RealEstate> realEstateList =  new ArrayList<>();

        if(model.getBusinessTypeId() == 1){
             realEstateList = realEstateRepository.searchDataPurchase(model.getKeySearch(), model.getDistrict(),
                    model.getMinPrice(), model.getMaxPrice(), model.getMinSquare(), model.getMaxSquare(),
                    model.getBusinessTypeId(), model.getTypeDetailId(), pageable).getContent();
        } else if (model.getBusinessTypeId() == 2) {
            realEstateList = realEstateRepository.searchDataLease(model.getKeySearch(), model.getDistrict(),
                    model.getMinPrice(), model.getMaxPrice(), model.getMinSquare(), model.getMaxSquare(),
                    model.getBusinessTypeId(), model.getTypeDetailId(), pageable).getContent();
        }

        if(realEstateList == null){
            throw new NullPointerException("realEstateList is null from searchData()");
        }

        List<RealEstateModel> realEstateModelList = new ArrayList<>();

        for(RealEstate item : realEstateList){

            User user = realEstateRepository.getReferenceById(item.getId()).getUser();
            UserModel userModel = modelMapper.map(user, UserModel.class);

            BusinessType businessType = realEstateRepository.getReferenceById(item.getId()).getBusinessType();
            BusinessTypeModel businessTypeModel = modelMapper.map(businessType, BusinessTypeModel.class);

            TypeDetail typeDetail = realEstateRepository.getReferenceById(item.getId()).getTypeDetail();
            TypeDetailModel typeDetailModel = modelMapper.map(typeDetail, TypeDetailModel.class);

            List<ImageModel> imageModelList = new ArrayList<>();
            List<Image> imageList = realEstateRepository.findRealEstateById(item.getId()).getImageList();
            for(Image imageItem: imageList){
                ImageModel imageModelItem =modelMapper.map(imageItem, ImageModel.class);
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

    public List<RealEstateModel> QuickSearchEstate(QuickSearchEstateModel model) throws NullPointerException {

        ModelMapper modelMapper = new ModelMapper();

        Pageable pageable;

        switch ( model.getTypeSort()) {
            case  1:
                pageable = PageRequest.of(0, 1000, Sort.by("post_date").descending());
                break;
            case  2:
                pageable = PageRequest.of(0, 1000, Sort.by("price").ascending());
                break;
            case  3:
                pageable = PageRequest.of(0, 1000, Sort.by("price").descending());
                break;
            case  4:
                pageable = PageRequest.of(0, 1000, Sort.by("area").ascending());
                break;
            case  5:
                pageable = PageRequest.of(0, 1000, Sort.by("area").descending());
                break;
            default:
                pageable = PageRequest.of(0, 1000, Sort.by("id").descending());
        }

        List<RealEstate> realEstateList =  new ArrayList<>();

        if(model.getBusinessTypeId() == 1){
            realEstateList = realEstateRepository.searchDataPurchase("", "",
                    model.getMinPrice(), model.getMaxPrice(), model.getMinSquare(), model.getMaxSquare(),
                    model.getBusinessTypeId(), model.getTypeDetailId(), pageable).getContent();
        } else if (model.getBusinessTypeId() == 2) {
            realEstateList = realEstateRepository.searchDataLease("", "",
                    model.getMinPrice(), model.getMaxPrice(), model.getMinSquare(), model.getMaxSquare(),
                    model.getBusinessTypeId(), model.getTypeDetailId(), pageable).getContent();
        }
        if(realEstateList == null){
            throw new NullPointerException("realEstateList is null from searchData()");
        }

        List<RealEstateModel> realEstateModelList = new ArrayList<>();

        for(RealEstate item : realEstateList){

            User user = realEstateRepository.getReferenceById(item.getId()).getUser();
            UserModel userModel = modelMapper.map(user, UserModel.class);

            BusinessType businessType = realEstateRepository.getReferenceById(item.getId()).getBusinessType();
            BusinessTypeModel businessTypeModel = modelMapper.map(businessType, BusinessTypeModel.class);

            TypeDetail typeDetail = realEstateRepository.getReferenceById(item.getId()).getTypeDetail();
            TypeDetailModel typeDetailModel = modelMapper.map(typeDetail, TypeDetailModel.class);

            List<ImageModel> imageModelList = new ArrayList<>();
            List<Image> imageList = realEstateRepository.findRealEstateById(item.getId()).getImageList();
            for(Image imageItem: imageList){
                ImageModel imageModelItem =modelMapper.map(imageItem, ImageModel.class);
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


