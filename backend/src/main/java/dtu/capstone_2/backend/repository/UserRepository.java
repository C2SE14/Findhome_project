package dtu.capstone_2.backend.repository;


import java.util.Optional;

import dtu.capstone_2.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


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
}