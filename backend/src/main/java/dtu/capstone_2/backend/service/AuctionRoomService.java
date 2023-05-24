package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.entity.Auction;
import dtu.capstone_2.backend.entity.AuctionRoom;
import dtu.capstone_2.backend.entity.User;
import dtu.capstone_2.backend.model.AuctionRoomModel;
import dtu.capstone_2.backend.model.UserModel;
import dtu.capstone_2.backend.repository.AuctionRepository;
import dtu.capstone_2.backend.repository.AuctionRoomRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionRoomService {

    @Autowired
    private AuctionRoomRepository auctionRoomRepository;

    @Autowired
    private AuctionRepository auctionRepository;

    public String saveTheBid(AuctionRoomModel auctionRoomModel){
        ModelMapper modelMapper =  new ModelMapper();

        AuctionRoom auctionRoom = new AuctionRoom();


        auctionRoom.setPricePaid(auctionRoomModel.getPricePaid());
        auctionRoom.setRandomName(auctionRoomModel.getRandomName());
        auctionRoom.setPaymentTime(auctionRoomModel.getPaymentTime());
        auctionRoom.setUser(modelMapper.map(auctionRoomModel.getUserModel(), User.class));
        auctionRoom.setAuction(modelMapper.map(auctionRoomModel.getAuctionModel(), Auction.class));

        Auction auction = auctionRepository.getById(auctionRoomModel.getAuctionModel().getId());
        List<AuctionRoom> auctionRoomList = auctionRoomRepository.getAuctionRoomByAuctionId(auctionRoomModel.getAuctionModel().getId());
        String returnVar = "save fail";
        if(auctionRoomList.isEmpty() && auctionRoomModel.getPricePaid() > auction.getStartingPrice()){
            auctionRoomRepository.save(auctionRoom);
            returnVar = "save success";
        }else{
            boolean checkMax = false;
            for(AuctionRoom auctionRoomItem: auctionRoomList){
                if(auctionRoomItem.getPricePaid() < auctionRoomModel.getPricePaid()){
                    checkMax = true;
                }else{
                    checkMax = false;
                }
            }
            if(checkMax == true){
                auctionRoomRepository.save(auctionRoom);
                returnVar = "save success";
            }else{
                returnVar = "save faill";
            }
        }
        return returnVar;
    }

    public List<AuctionRoomModel> getAuctionRoomByAuctionId(Long id){
        List<AuctionRoom>  auctionRoomList = auctionRoomRepository.getAuctionRoomByAuctionId(id);

        List<AuctionRoomModel> auctionRoomModelList = new ArrayList<>();
        ModelMapper modelMapper = new ModelMapper();
        for(AuctionRoom auctionRoomItem: auctionRoomList){
            AuctionRoomModel auctionRoomModel = modelMapper.map(auctionRoomItem, AuctionRoomModel.class);
            UserModel userModel = modelMapper.map(auctionRoomItem.getUser(), UserModel.class);
            auctionRoomModel.setUserModel(userModel);
            auctionRoomModelList.add(auctionRoomModel);
        }
        return auctionRoomModelList;
    }
}
