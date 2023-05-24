package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionResult;
import dtu.capstone_2.backend.entity.User;
import dtu.capstone_2.backend.model.AuctionModel;
import dtu.capstone_2.backend.model.AuctionResultModel;
import dtu.capstone_2.backend.model.ImageModel;
import dtu.capstone_2.backend.repository.AuctionResultRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionResultService {

    @Autowired
    private AuctionResultRepository auctionResultRepository;

    public String addAuctionResult(AuctionResultModel auctionResultModel){
        ModelMapper modelMapper = new ModelMapper();

        AuctionResult auctionResult = new AuctionResult();
        auctionResult.setReason(auctionResultModel.getReason());
        auctionResult.setCompleteStatus(auctionResultModel.isCompleteStatus());
        auctionResult.setEndTime(auctionResultModel.getEndTime());
        auctionResult.setUserId(auctionResultModel.getUserId());
        auctionResult.setAuctionId(auctionResultModel.getAuctionId());
        auctionResultRepository.save(auctionResult);
        return "Add success";
    }

    public List<AuctionResultModel> getAllAuctionResult(){
        ModelMapper modelMapper = new ModelMapper();
        List<AuctionResult> auctionResults = auctionResultRepository.findAll();
        List<AuctionResultModel>  auctionResultModelList = new ArrayList<>();
        for(AuctionResult auctionResultItem: auctionResults){
            auctionResultModelList.add(modelMapper.map(auctionResultItem, AuctionResultModel.class));
        }
        return auctionResultModelList;
    }
}
