package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

    @Transactional// resolve "Executing an update/delete query"
    @Modifying
    @Query(value = "INSERT INTO image (image, real_estate_id)\n" +
            "VALUES (:name, :realEstateId);", nativeQuery = true)
    public void insertImage(@Param("name")String name, @Param("realEstateId") Long realEstateId);

    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete from image where real_estate_id = :id", nativeQuery = true)
    public void deleteImageByRealEstateId(@Param("id") long id);

}

