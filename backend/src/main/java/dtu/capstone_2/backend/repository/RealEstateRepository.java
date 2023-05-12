package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.RealEstate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
//    @Query(value = "delete from RealEstate r where r.businessType.id = 1")
    public void deleteRealEstate(@Param("id") long id);


    @Modifying // allow delete
    @Transactional // allow delete
    @Query(value = "delete FROM real_estate\n" +
            "where real_estate.id = :realEstateId and real_estate.user_id = :userId",  nativeQuery = true)
    public void deleteRealEstateOfUser(@Param("realEstateId") long realEstateId, @Param("userId") long userId);
    @Query(value = "SELECT * FROM find_home.real_estate\n" +
            "where (name_estate like %:keySearch% or address like %:keySearch%) \n" +
            "and (IF(:district='', 1=1, address like %:district%))\n" +
            "and (IF(:maxPrice=-1, 1=1, price <= :maxPrice and price >= :minPrice))\n" +
            "and (IF(:maxSquare=-1, 1=1, area <= :maxSquare and area >= :minSquare))\n" +
            "and (IF(:businessTypeId=-1, 1=1, business_type_id = :businessTypeId))\n" +
            "and (IF(:typeDetailId=-1, 1=1, type_detail_id = :typeDetailId))\n", nativeQuery = true)
    public Page<RealEstate> searchDataPurchase(@Param("keySearch") String keySearch,
                                       @Param("district") String district,
                                       @Param("minPrice") double minPrice,
                                       @Param("maxPrice") double maxPrice,
                                       @Param("minSquare") double minSquare,
                                       @Param("maxSquare") double maxSquare,
                                       @Param("businessTypeId") int businessTypeId,
                                       @Param("typeDetailId") int typeDetailId,
                                       Pageable pageable);

    @Query(value = "SELECT * FROM find_home.real_estate\n" +
            "where (name_estate like %:keySearch% or address like %:keySearch%) \n" +
            "and (IF(:district='', 1=1, address like %:district%))\n" +
            "and (IF(:maxPrice=-1, 1=1, rent_cost <= :maxPrice and rent_cost >= :minPrice))\n" +
            "and (IF(:maxSquare=-1, 1=1, area <= :maxSquare and area >= :minSquare))\n" +
            "and (IF(:businessTypeId=-1, 1=1, business_type_id = :businessTypeId))\n" +
            "and (IF(:typeDetailId=-1, 1=1, type_detail_id = :typeDetailId))\n", nativeQuery = true)
    public Page<RealEstate> searchDataLease(@Param("keySearch") String keySearch,
                                               @Param("district") String district,
                                               @Param("minPrice") double minPrice,
                                               @Param("maxPrice") double maxPrice,
                                               @Param("minSquare") double minSquare,
                                               @Param("maxSquare") double maxSquare,
                                               @Param("businessTypeId") int businessTypeId,
                                               @Param("typeDetailId") int typeDetailId,
                                               Pageable pageable);





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
