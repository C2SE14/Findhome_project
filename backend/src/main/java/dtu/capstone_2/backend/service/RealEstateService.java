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
        realEstate.setInterior(realEstateModel.getInterior());

        realEstate.setBusinessType(modelMapper.map(realEstateModel.getBusinessTypeModel(), BusinessType.class));
        realEstate.setTypeDetail(modelMapper.map(realEstateModel.getTypeDetailModel(), TypeDetail.class));

        realEstateRepository.save(realEstate);

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

    public List<RealEstateModel> findRealEstateByAddressOrEstateName(String data) throws NullObjectExeption {

        ModelMapper modelMapper = new ModelMapper();
        List<RealEstate> realEstateList =  realEstateRepository.findRealEstateByNameOrAddress(data);
        if(realEstateList == null){
            throw new NullObjectExeption("realEstateList is null from findRealEstateByNameOrAddress()");
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

//    public List<RealEstateModel> filterSearchPath(String filterPath){
//
//        List<RealEstateModel> realEstateModelList = new ArrayList<>();
//
//        boolean business = false;
//        String typeDetailName = "";
//        Double priceStart = (double) 0;
//        Double priceEnd = null;
//        float areaStart = 0;
//        float areaEnd = 0;
//        String address = "";
//        Double renCostStart = (double) 0;
//        Double renCostEnd = null;
//
//        if(filterPath.isBlank() || filterPath.isEmpty()){// TỪ LIST NÀY CÓ THỂ LẤY BDS MUA HAY BÁN
//            filterPath = "";
//        }else{// lam sao de biet dang loc mua hay ban -> tren url co chu ban(can ho chung cu)
//            // cho 5 biến tương úng với 5 tham số trong query
//            //-> bỏ hết gạch ngang giữa các từ trong chuổi
//            //-> lấy hết type detail name từ db lên(cho thành chữ thường hết) so sánh xem những phần tử này có cái nào chứa trong chuổi gửi về không nếu có -> gán cho biến typeDetailName biến đó rồi xóa cum dó khỏi chuổi(để sau cùng chỉ còn lại địa chỉ )
//            filterPath = filterPath.replace("-", " ").toUpperCase();
//            List<TypeDetail> typeDetails =  typeDetailRepository.findAll();
////            List<RealEstate> realEstateList = realEstateRepository.findAll();
//
//            if(filterPath.contains("ban")  == true){
//                business = true;
//            }else if(filterPath.contains("cho thue")  == true){
//                business = false;
//            }
//
//
//
//            for(TypeDetail item: typeDetails){// láy từng phần tử trong mảng kiểm tra xem có tồn tại trong chuổi path ko
//                if(filterPath.contains(Normalizer.normalize(item.getTypeDetailName(), Normalizer.Form.NFKD))){
//                    typeDetailName = item.getTypeDetailName();
//                    filterPath = filterPath.replace(item.getTypeDetailName(), ""); // xóa tên loại chi tiết khỏi chuổi
//                }
//            }
//
//
//            filterPath =  filterPath.toLowerCase();
//
//            if(filterPath.contains("gia duoi 500 trieu") == true){
//                priceStart = 1000000000.0;
//                filterPath = filterPath.replace("gia duoi 500 trieu", "");
//            }else if(filterPath.contains("gia tu 1 den 2 ty") == true){
//                priceStart = 1000000000.0;
//                priceEnd = 2000000000.0;
//                filterPath = filterPath.replace("gia tu 1 den 2 ty", "");
//            }else if(filterPath.contains("gia tu 2 den 3 ty") == true){
//                priceStart = 2000000000.0;
//                priceEnd = 3000000000.0;
//                filterPath = filterPath.replace("gia tu 2 den 3 ty", "");
//            }else if(filterPath.contains("gia tu 3 den 5 ty") == true){
//                priceStart = 3000000000.0;
//                priceEnd =   5000000000.0;
//                filterPath = filterPath.replace("gia tu 3 den 5 ty", "");
//            }else if(filterPath.contains("gia tu 5 den 7 ty") == true){
//                priceStart = 5000000000.0;
//                priceEnd =   7000000000.0;
//                filterPath = filterPath.replace("gia tu 5 den 7 ty", "");
//            }else if(filterPath.contains("gia tu 7 den 10 ty") == true){
//                priceStart = 7000000000.0;
//                priceEnd =   10000000000.0;
//                filterPath = filterPath.replace("gia tu 7 den 10 ty", "");
//            }else if(filterPath.contains("gia tu 10 den 20 ty") == true){
//                priceStart = 10000000000.0;
//                priceEnd =   20000000000.0;
//                filterPath = filterPath.replace("gia tu 10 den 20 ty", "");
//            }else if(filterPath.contains("gia tu 20 den 30 ty") == true){
//                priceStart = 20000000000.0;
//                priceEnd =   30000000000.0;
//                filterPath = filterPath.replace("gia tu 20 den 30 ty", "");
//            }
//
//
//            else if(filterPath.contains("gia duoi 1 trieu") == true){
//                renCostEnd = 1000000.0;
//                filterPath = filterPath.replace("tu 1 den 3 trieu", "");
//            }else if(filterPath.contains("gia tu 1 den 3 trieu") == true){
//                renCostStart = 1000000.0;
//                renCostEnd =   3000000.0;
//                filterPath = filterPath.replace("tu 1 den 3 trieu", "");
//            }
//            else if(filterPath.contains("gia tu 3 den 5 trieu") == true){
//                renCostStart = 3000000.0;
//                renCostEnd =   5000000.0;
//                filterPath = filterPath.replace("gia tu 3 den 5 trieu", "");
//            }
//            else if(filterPath.contains("gia tu 5 den 10 trieu") == true){
//                renCostStart = 5000000.0;
//                renCostEnd =   10000000.0;
//                filterPath = filterPath.replace("gia tu 5 den 10 trieu", "");
//            }
//            else if(filterPath.contains("gia tu 10 den 40 trieu") == true){
//                renCostStart = 10000000.0;
//                renCostEnd =   40000000.0;
//                filterPath = filterPath.replace("gia tu 10 den 40 trieu", "");
//            }
//            else if(filterPath.contains("gia tu 40 den 70 trieu") == true){
//                renCostStart = 40000000.0;
//                renCostEnd =   70000000.0;
//                filterPath = filterPath.replace("gia tu 40 den 70 trieu", "");
//            }
//            else if(filterPath.contains("gia tu 70 den 100 trieu") == true){
//                renCostStart = 70000000.0;
//                renCostEnd =   100000000.0;
//                filterPath = filterPath.replace("gia tu 70 den 100 trieu", "");
//            }
//            else if(filterPath.contains("gia tren 100 trieu") == true){
//                renCostStart = 20000000000.0;
//                filterPath = filterPath.replace("gia tren 100 trieu", "");
//            }
//
//            if(filterPath.contains("dien tich duoi 30 m2") == true){
//                areaEnd = 30;
//                filterPath = filterPath.replace("dien tich duoi 30 m2", "");
//            }else if(filterPath.contains("dien tich tu 30 m2 den 50 m2") == true){
//                areaStart = 30;
//                areaEnd = 50;
//                filterPath = filterPath.replace("dien tich tu 30 m2 den 50 m2", "");
//            }else if(filterPath.contains("dien tich tu 50 m2 den 80 m2") == true){
//                areaStart = 50;
//                areaEnd = 80;
//                filterPath = filterPath.replace("dien tich tu 50 m2 den 80 m2", "");
//            }else if(filterPath.contains("dien tich tu 80 m2 den 100 m2") == true){
//                areaStart = 80;
//                areaEnd = 100;
//                filterPath = filterPath.replace("dien tich tu 80 m2 den 100 m2", "");
//            }else if(filterPath.contains("dien tich tu 100 m2 den 150 m2") == true){
//                areaStart = 100;
//                areaEnd = 150;
//                filterPath = filterPath.replace("dien tich tu 100 m2 den 150 m2", "");
//            }else if(filterPath.contains("dien tich tu 150 m2 den 300 m2") == true){
//                areaStart = 150;
//                areaEnd = 300;
//                filterPath = filterPath.replace("dien tich tu 150 m2 den 300 m2", "");
//            }else if(filterPath.contains("dien tich tu 300 m2 den 500 m2") == true){
//                areaStart = 300;
//                areaEnd = 500;
//                filterPath = filterPath.replace("dien tich tu 300 m2 den 500 m2", "");
//            }else if(filterPath.contains("dien tich tren 500 m2") == true){
//                areaStart = 500;
//                filterPath = filterPath.replace("dien tich tren 500 m2", "");
//            }
//
//            address = filterPath;
//
//
//            List<RealEstate> realEstateList = null;
//
//            if(business == true){
//                 realEstateList = realEstateRepository.filterSearchPath(typeDetailName, priceStart, priceEnd, areaStart, areaEnd, address);
//            }else if(business == false){
//                 realEstateList = realEstateRepository.filterSearchPath(typeDetailName, renCostStart, renCostEnd, areaStart, areaEnd, address);
//            }
//
//
//            ModelMapper modelMapper = new ModelMapper();
//            if (realEstateList == null) {
////                throw new NullObjectExeption("realEstateList is null from getRealEstateByBusinessTypeId()");
//            }
//
//
//
//            for (RealEstate item : realEstateList) {
//
//                User user = realEstateRepository.getReferenceById(item.getId()).getUser();
//                UserModel userModel = modelMapper.map(user, UserModel.class);
//
//                BusinessType businessType = realEstateRepository.getReferenceById(item.getId()).getBusinessType();
//                BusinessTypeModel businessTypeModel = modelMapper.map(businessType, BusinessTypeModel.class);
//
//                TypeDetail typeDetail = realEstateRepository.getReferenceById(item.getId()).getTypeDetail();
//                TypeDetailModel typeDetailModel = modelMapper.map(typeDetail, TypeDetailModel.class);
//
//                List<ImageModel> imageModelList = new ArrayList<>();
//                List<Image> imageList = realEstateRepository.findRealEstateById(item.getId()).getImageList();
//                for (Image imageItem : imageList) {
//                    ImageModel imageModelItem = modelMapper.map(imageItem, ImageModel.class);
//                    imageModelList.add(imageModelItem);
//                }
//
//                RealEstateModel realEstateModel = modelMapper.map(item, RealEstateModel.class);
//
//                realEstateModel.setUserModel(userModel);
//                realEstateModel.setBusinessTypeModel(businessTypeModel);
//                realEstateModel.setTypeDetailModel(typeDetailModel);
//                realEstateModel.setImageModelList(imageModelList);
//
//                realEstateModelList.add(realEstateModel);
//            }
//        }
//        return realEstateModelList;
//    }
//
//
//    public static void main(String[] args) {
//            String ham_entry = "bán-căn-hộ-chung-cu";
//            String new_ham_entry = Normalizer.normalize(ham_entry.replace("-", " ").toUpperCase(), Normalizer.Form.NFKD);
//            new_ham_entry = new_ham_entry.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
//            System.out.println(new_ham_entry);
//        }
}


