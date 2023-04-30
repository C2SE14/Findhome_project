package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.BusinessType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessTypeRepository extends JpaRepository<BusinessType, Long> {

}
