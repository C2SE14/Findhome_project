package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.RealEstate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface RealEstateRepository extends JpaRepository<RealEstate, Long> {

    @Query("select r from RealEstate r where r.id = :id")
    public RealEstate findRealEstateById(@Param("id") Long id);

    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete from RealEstate where id = :id")
    public void deleteRealEstate(@Param("id") long id);

    @Query(value = "SELECT * FROM find_home.real_estate\n" +
            "where name_estate like %:keySearch% or address like %:keySearch%", nativeQuery = true)
    public List<RealEstate> findRealEstateByNameOrAddress(@Param("keySearch") String keySearch);



    @Query(value = "SELECT * FROM find_home.real_estate\n" +
            "inner join find_home.type_detail on real_estate.type_detail_id = type_detail.id\n" +
            "where \n" +
            "\ttype_detail.type_detail_name like :typeDetailName \n" +
            "    and real_estate.price >= :priceOrRentCostStart and real_estate.price <= :priceOrRentCostEnd \n" +
            "    and real_estate.rent_cost >= :priceOrRentCostStart and real_estate.rent_cost <= :priceOrRentCostEnd  \n" +
            "    and real_estate.area >= :areaStart and real_estate.area <= :areaEnd \n" +
            "    and real_estate.address like %:address%;", nativeQuery = true)
    public List<RealEstate> filterSearchPath(@Param("typeDetailName") String typeDetailName,
                                             @Param("priceOrRentCostStart") Double priceOrRentCostStart,
                                             @Param("priceOrRentCostEnd") Double priceOrRentCostEnd,
                                             @Param("areaStart") float areaStart,
                                             @Param("areaEnd") float areaEnd,
                                             @Param("address") String address);



}
