package dtu.capstone_2.backend.repository;

import dtu.capstone_2.backend.entity.TypeDetail;
import dtu.capstone_2.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeDetailRepository extends JpaRepository<TypeDetail, Long> {
}
