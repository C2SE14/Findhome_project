package dtu.capstone_2.backend.repository;


import java.util.List;
import java.util.Optional;

import dtu.capstone_2.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query(value = "select * from users\n" +
            "join real_estate on users.id = real_estate.user_id\n" +
            "where real_estate.id = :id", nativeQuery = true)
    public User getUserByRealEstateId(Long id);

    @Query(value = "SELECT username FROM find_home.users\n" +
            "where find_home.email like :email", nativeQuery = true)
    public String getUserNameByEmail(@Param("email") String email);

    User findByEmail(String email);


    @Query(value = "SELECT * FROM find_home.users\n" +
            "where id = :id", nativeQuery = true)
    User findUserById(@Param("id") long id);

    @Query(value = "SELECT DISTINCT users.id, users.username, users.date_of_birth, users.email, users.password, users.full_name, users.phone_number, users.username, users.gender, users.address, users.identity_card, users.identity_card_date, users.avatar, users.front_of_the_identity_card, users.back_of_the_identity_card  FROM auction_registration\n" +
            "inner join users on auction_registration.user_id = users.id\n" +
            "where auction_registration.auction_id = :id", nativeQuery = true)
    public List<User> getUserInAuctionWithId(@Param("id") Long id);


    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete from User u where u.id = :id")
    public void deleteUserById(@Param("id") long id);
}