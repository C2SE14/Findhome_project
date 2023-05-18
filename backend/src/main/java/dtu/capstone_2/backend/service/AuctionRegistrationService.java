package dtu.capstone_2.backend.service;

import dtu.capstone_2.backend.controller.AuctionRegistrationController;
import dtu.capstone_2.backend.entity.AuctionRegistration;
import dtu.capstone_2.backend.model.AuctionRegistrationModel;
import dtu.capstone_2.backend.repository.AuctionRegistrationRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuctionRegistrationService {

    @Autowired
    private AuctionRegistrationRepository auctionRegistrationRepository;

    public String addAuctionRegistration(AuctionRegistrationModel auctionRegistrationModel){
        ModelMapper modelMapper = new ModelMapper();

        auctionRegistrationRepository.save(modelMapper.map(auctionRegistrationModel, AuctionRegistration.class));
        return "save success";
    }
}
