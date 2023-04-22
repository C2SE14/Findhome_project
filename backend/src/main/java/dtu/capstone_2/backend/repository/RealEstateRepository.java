package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.RealEstate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RealEstateRepository extends JpaRepository<RealEstate, Long> {

    @Query("select r from RealEstate r where r.id = :id")
    public RealEstate findRealEstateById(@Param("id") Long id);

}
