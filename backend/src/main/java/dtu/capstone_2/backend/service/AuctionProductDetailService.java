package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionProductDetails;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.AuctionProductDetailsModel;
import dtu.capstone_2.backend.repository.AuctionProductDetailRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.ManyToOne;
import java.text.ParseException;

@Service
public class AuctionProductDetailService {

    @Autowired
    private AuctionProductDetailRepository auctionProductDetailRepository;

    public AuctionProductDetailsModel getByAuctionId(Long id){
        ModelMapper modelMapper = new ModelMapper();

        AuctionProductDetails auctionProductDetails = auctionProductDetailRepository.findAuctionProductDetailsByAuctionId(id);

        Auction auction = auctionProductDetails.getAuction();
        AuctionModel auctionModel =  modelMapper.map(auctionProductDetails.getAuction(), AuctionModel.class);

        AuctionProductDetailsModel auctionProductDetailsModel =  modelMapper.map( auctionProductDetails, AuctionProductDetailsModel.class);
        auctionProductDetailsModel.setAuctionModel(auctionModel);

        return auctionProductDetailsModel;
    }

    public String addProductDetail(AuctionProductDetailsModel auctionProductDetailsModel) throws ParseException {
        ModelMapper modelMapper = new ModelMapper();

        AuctionProductDetails auctionProductDetails = modelMapper.map(auctionProductDetailsModel, AuctionProductDetails.class);

        Auction auction = modelMapper.map(auctionProductDetailsModel.getAuctionModel(), Auction.class);
        // lưu thủ công xem
        auctionProductDetails.setAuction(auction);
        auctionProductDetailRepository.save(auctionProductDetails);

        return "Add success";

    }
}
