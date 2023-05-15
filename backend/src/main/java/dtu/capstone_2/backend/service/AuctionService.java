package dtu.capstone_2.backend.service;


import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.Image;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.ImageModel;
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

    public String addAuction(AuctionModel auctionModel) throws ParseException {
        ModelMapper modelMapper = new ModelMapper();

        Auction auction = modelMapper.map(auctionModel, Auction.class);

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
            auctionModel.setImageModelList(imageModelList);

        return auctionModel;
    }
}
