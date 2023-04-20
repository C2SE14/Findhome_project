package dtu.capstone_2.backend.repository;


import dtu.capstone_2.backend.entity.ERole;
import dtu.capstone_2.backend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}