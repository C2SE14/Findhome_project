package dtu.capstone_2.backend.service;


import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionProductDetails;
import dtu.capstone_2.backend.entity.RealEstate;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.ImageModel;
import dtu.capstone_2.backend.model.RealEstateModel;
import dtu.capstone_2.backend.repository.AuctionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    public String addAuction(AuctionModel auctionModel) throws ParseException {
        ModelMapper modelMapper = new ModelMapper();

        Auction auction = modelMapper.map(auctionModel, Auction.class);

//        AuctionProductDetails auctionProductDetails = modelMapper.map(auctionModel.getAuctionProductDetailsModel(), AuctionProductDetails.class);

        auction.setAuctionProductDetails(auction.getAuctionProductDetails());
        auctionRepository.save(auction);

        return "Add success";

    }

    public List<AuctionModel> getAllAuctionModel(){
        ModelMapper modelMapper = new ModelMapper();
        List<Auction> auctionList = auctionRepository.findAll();
        List<AuctionModel> auctionModelList = new ArrayList<>();
        for(Auction auction: auctionList){
            auctionModelList.add(modelMapper.map(auction, AuctionModel.class));
        }
        return auctionModelList;
    }
}
