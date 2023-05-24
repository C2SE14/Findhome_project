package dtu.capstone_2.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
public class AuctionRegistrationModel {


    private Long id;

    private boolean payFees;

    private boolean checkFace;

    private boolean acceptTerms;


    private UserModel userModel;

    private AuctionModel auctionModel;

//   private RegisterAuction registerAuction;

   private Long idUser;
}
